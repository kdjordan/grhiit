"use strict";

const db = require("../db.js");
const { BadRequestError, NotFoundError } = require("../expressError");
const Workout = require("./workout.js");
const User = require("./user.js")

const {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
  
} = require("./_testCommon");

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);

/************************************** create */

describe("create", function () {
  const items = [{
    "movementName" : "test",
    "movementAbbrv": "TST",
    "type" : "regular",
    "rest": 2,
    "work": 2,
    "rounds": 1,
    "id": "hhh4444"
  }]

  const newWorkout = {
    workoutName: "New",
    workoutDesc: "New Description",
    data : items
  };

  test("works", async function () {
    const user = await User.authenticate("u1", "password1");
    let workout = await Workout.create(user.userId, newWorkout);
    expect(workout.createdAt).toBeInstanceOf(Date);
    expect(workout.workoutId).toEqual(expect.any(Number));
  });
});

/************************************** findAll by userId*/

describe("findAll", function () {
  test("works: all", async function () {
    const user = await User.authenticate("u1", "password1");
    const items = [{
      "movementName" : "test",
      "movementAbbrv": "TST",
      "type" : "regular",
      "rest": 2,
      "work": 2,
      "rounds": 1,
      "id": "hhh4444"
    }]
  
    const newWorkout1 = {
      workoutName: "New1",
      workoutDesc: "New Description1",
      data : items
    };
    const newWorkout2 = {
      workoutName: "New2",
      workoutDesc: "New Description2",
      data : items
    };
    
    await Workout.create(user.userId, newWorkout1);
    await Workout.create(user.userId, newWorkout2);
    let workouts = await Workout.findAll(user.userId);
  
    expect(workouts).toHaveLength(2)
    expect(workouts[0].user_id).toEqual(user.userId)
    expect(workouts[1].user_id).toEqual(user.userId)
  });

  test("works: empty list on nothing found", async function () {
    let workouts = await Workout.findAll(99999999);
    expect(workouts).toEqual([]);
  });
})
/************************************** get by id */

describe("get", function () {
  test("works", async function () {
    const user = await User.authenticate("u1", "password1");
    const items = [{
      "movementName" : "test",
      "movementAbbrv": "TST",
      "type" : "regular",
      "rest": 2,
      "work": 2,
      "rounds": 1,
      "id": "hhh4444"
    }]
  
    const newWorkout = {
      workoutName: "New1",
      workoutDesc: "New Description1",
      data : items
    };

    let workout = await Workout.create(user.userId, newWorkout);
    let resWorkout = await Workout.getWorkout(workout.workoutId);
    expect(resWorkout).toEqual(expect.objectContaining([
      {
        id: "hhh4444",
        movementName: "test",
        movementAbbrv: "TST",
        type: 'regular',
        work: 2,
        rest: 2,
        rounds : 1
      }, 
    ]))   
  })

  test("not found if no such workout", async function () {
    try {
      await Workout.getWorkout(999999);
      fail();
    } catch (err) {
      console.log('err', err)
      expect(err instanceof NotFoundError).toBeTruthy();
    }
  });
});