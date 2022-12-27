"use strict";

/** Routes for companies. */

const jsonschema = require("jsonschema");
const express = require("express");

const { BadRequestError } = require("../expressError");
const { ensureAdmin, ensureCorrectUserOrAdmin, ensureLoggedIn, authenticateJWT } = require("../middleware/auth");
const Workout = require("../models/workout");

const workoutNewSchema = require("../schemas/workoutNew.json");


const router = new express.Router();


/** POST / { workout } =>  { workout }
 *
 * workout should be {  }
 *
 * Returns {  }
 *
 * Authorization required: loggedin
 */

router.post("/:id", async function (req, res, next) {
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
 * Authorization required: loggedin / user only gets theor workouts
 */

router.get("/:id", async function (req, res, next) {
  try {
    const workouts = await Workout.findAll(req.params.id);
    return res.json({ workouts });

  } catch (err) {
    return next(err);
  }
});

/** GET /  =>
 *   all workouts by userId to populate dashboard
 *
 * Authorization required: loggedin / user only gets theor workouts
 */

router.get("/workout/:id", async function (req, res, next) {
  try {
    const workout = await Workout.getWorkout(req.params.id);
    console.log('got workouts ', workout)
    return res.json({ workout });

  } catch (err) {
    return next(err);
  }
});

/** GET /[handle]  =>  { company }
 *
 *  Company is { handle, name, description, numEmployees, logoUrl, jobs }
 *   where jobs is [{ id, title, salary, equity }, ...]
 *
 * Authorization required: none
 */

router.get("/:handle", async function (req, res, next) {
  try {
    const company = await Company.get(req.params.handle);
    return res.json({ company });
  } catch (err) {
    return next(err);
  }
});

/** PATCH /[handle] { fld1, fld2, ... } => { company }
 *
 * Patches company data.
 *
 * fields can be: { name, description, numEmployees, logo_url }
 *
 * Returns { handle, name, description, numEmployees, logo_url }
 *
 * Authorization required: admin
 */

router.patch("/:handle", ensureAdmin, async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, companyUpdateSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    const company = await Session.update(req.params.handle, req.body);
    return res.json({ company });
  } catch (err) {
    return next(err);
  }
});

/** DELETE /[handle]  =>  { deleted: handle }
 *
 * Authorization: admin
 */

router.delete("/:handle", ensureAdmin, async function (req, res, next) {
  try {
    await Session.remove(req.params.handle);
    return res.json({ deleted: req.params.handle });
  } catch (err) {
    return next(err);
  }
});


module.exports = router;
