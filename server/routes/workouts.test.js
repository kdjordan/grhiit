"use strict";

const request = require("supertest");
const crypto = require('crypto');
const app = require("../app");
const User = require("../models/user");
const { createToken } = require("../helpers/tokens");

const {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
  adminToken
} = require("./_testCommon");


beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);
/************************************** POST /workouts */
let user1
let u1Token

describe("POST /workouts", function () {
  const newWorkout = {
    workoutName: "new",
    workoutDesc: "New",
    data : [{
      movementName: "Squat",
      movementAbbrv: "SQT",
      type: "regular",
      rest: 5,
      work: 5,
      rounds: 2,
      id: crypto.randomUUID()
    }]
  };

  test("ok for admin", async function () {
    user1 = await User.get('u1')
    const resp = await request(app)
        .post(`/workouts/${user1.userId}`)
        .send(newWorkout)
        .set("authorization", `Bearer ${adminToken}`);
    expect(resp.statusCode).toEqual(201);
    expect(resp.body).toEqual(expect.objectContaining({
      workout: {
          workoutId: expect.any(Number),
          createdAt: expect.any(String),
        }
    }));
  });

  test("correct user", async function () {
    u1Token = createToken(user1)
    const resp = await request(app)
        .post(`/workouts/${user1.userId}`)
        .send(newWorkout)
        .set("authorization", `Bearer ${u1Token}`);
    expect(resp.statusCode).toEqual(201);
  });

  test("bad request with missing data", async function () {
    const resp = await request(app)
        .post(`/workouts/${user1.userId}`)
        .send({
          workoutName: "new",
          workoutDesc: "New",
        })
        .set("authorization", `Bearer ${u1Token}`);
    expect(resp.statusCode).toEqual(400);
  });

  test("bad request with invalid data", async function () {
    const resp = await request(app)
        .post(`/workouts/${user1.userId}`)
        .send({
          workoutName: "new",
          workoutDesc: "New",
          data: ['1', 2, 'test']
        })
        .set("authorization", `Bearer ${u1Token}`);
    expect(resp.statusCode).toEqual(400);
  });
});

/************************************** GET /workouts */

describe("GET /workouts", function () {
  let workoutId
  test("ok for admin", async function () {
    const resp = await request(app).get(`/workouts/${user1.userId}`)
    .set("authorization", `Bearer ${adminToken}`);
    workoutId = resp.body.workouts[0].id
    expect(resp.body).toEqual({
      workouts: [
        {
          id: expect.any(Number),
          user_id: user1.userId,
          name: 'W1',
          description: 'Workout1',
          created_at: expect.any(String),
          data: expect.any(Array)
        }
      ]
    });
  });

  test("not found for no such workout", async function () {
    const resp = await request(app).get(`/workouts/0002`)
      .set("authorization", `Bearer ${u1Token}`);
    expect(resp.statusCode).toEqual(401);
  });

  test("ok for correct user", async function () {
    const resp = await request(app).get(`/workouts/workout/${workoutId}`)
      .set("authorization", `Bearer ${u1Token}`);
    expect(resp.statusCode).toEqual(200);
  });
});

