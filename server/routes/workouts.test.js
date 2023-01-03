"use strict";

const request = require("supertest");
const crypto = require('crypto');
const app = require("../app");
const User = require("../models/user");

const {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
  u1Token,
  adminToken,
} = require("./_testCommon");


beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);
/************************************** POST /workouts */
let user1

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

  test("unauth for non-admin", async function () {
    const resp = await request(app)
        .post("/workouts")
        .send(newWorkout)
        .set("authorization", `Bearer ${u1Token}`);
    expect(resp.statusCode).toEqual(404);
  });

  test("bad request with missing data", async function () {
    const resp = await request(app)
        .post("/workouts")
        .send({
          userId: 12
        })
        .set("authorization", `Bearer ${adminToken}`);
    expect(resp.statusCode).toEqual(404);
  });

  test("bad request with invalid data", async function () {
    const resp = await request(app)
        .post("/companies")
        .send({
          ...newWorkout,
          name: 'fake'
        })
        .set("authorization", `Bearer ${adminToken}`);
    expect(resp.statusCode).toEqual(404);
  });
});

/************************************** GET /workouts */

describe("GET /workouts", function () {
  test("ok for admin", async function () {
    const resp = await request(app).get(`/workouts/${user1.userId}`)
    .set("authorization", `Bearer ${adminToken}`);;
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
      const resp = await request(app).get(`/workouts/nope`);
      expect(resp.statusCode).toEqual(401);
    });
});

/************************************** GET /companies/:handle */

// describe("GET /companies/:handle", function () {
//   test("works for anon", async function () {
//     const resp = await request(app).get(`/companies/c1`);
//     expect(resp.body).toEqual({
//       company: {
//         handle: "c1",
//         name: "C1",
//         description: "Desc1",
//         numEmployees: 1,
//         logoUrl: "http://c1.img",
//         jobs: [
//           { id: testJobIds[0], title: "J1", equity: "0.1", salary: 1 },
//           { id: testJobIds[1], title: "J2", equity: "0.2", salary: 2 },
//           { id: testJobIds[2], title: "J3", equity: null, salary: 3 },
//         ],
//       },
//     });
//   });

//   test("works for anon: company w/o jobs", async function () {
//     const resp = await request(app).get(`/companies/c2`);
//     expect(resp.body).toEqual({
//       company: {
//         handle: "c2",
//         name: "C2",
//         description: "Desc2",
//         numEmployees: 2,
//         logoUrl: "http://c2.img",
//         jobs: [],
//       },
//     });
//   });



