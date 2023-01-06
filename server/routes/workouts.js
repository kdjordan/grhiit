"use strict";

/** Routes for Workouts. */

const jsonschema = require("jsonschema");
const express = require("express");

const { BadRequestError } = require("../expressError");
const { ensureCorrectUserOrAdmin, ensureLoggedIn } = require("../middleware/auth");
const Workout = require("../models/workout");

const workoutNewSchema = require("../schemas/workoutNew.json");


const router = new express.Router();


/** POST / { workout } =>  { workout }
 *
 * workout should be { workoutName, workoutDesc, data : { ...intervals } }
 *
 * Returns { the submitted workout }
 *
 * Authorization required: loggedin and correct userId
 */

router.post("/:id", ensureCorrectUserOrAdmin, async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, workoutNewSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }
    
    const workout = await Workout.create(req.params.id, req.body);
    return res.status(201).json({ workout });
  } catch (err) {
    return next(err);
  }
});

/** GET /  =>
 *   all workouts by userId to populate dashboard
 *
 *  Returns { all workouts a user had }
 * Authorization required: loggedin 
 */

router.get("/:id", ensureCorrectUserOrAdmin, async function (req, res, next) {
    const workouts = await Workout.findAll(req.params.id);
    return res.json({ workouts })
});

/** GET /  =>
 *   all individual workout for Play by workout ID
 *
 * JWT required: check JWT present in header 
 */

router.get("/workout/:id",  async function (req, res, next) {
  try {
    const workout = await Workout.getWorkout(req.params.id);
    return res.json({ workout });

  } catch (err) {
    return next(err);
  }
});




module.exports = router;
