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


// describe("POST /workouts", function () {
//   let user1
//   test('example test', async () => {
//     user1 = await User.get('u1')
//   });
//   const newWorkout = {
//     workoutName: "new",
//     workoutDesc: "New",
//     data : [{
//       movementName: "Squat",
//       movementAbbrv: "SQT",
//       type: "regular",
//       rest: 5,
//       work: 5,
//       rounds: 2,
//       id: crypto.randomUUID()
//     }]
//   };

//   test("ok for admin", async function () {
//     const resp = await request(app)
//         .post(`/workouts/${user1.id}`)
//         .send(newWorkout)
//         .set("authorization", `Bearer ${adminToken}`);
//     expect(resp.statusCode).toEqual(201);
//     console.log(resp.body)
//     expect(resp.body).toEqual({
//       workout: {
//         createdAt: expect.any(String),
//         workoutId: expect.any(Number)
//       }
//     });
//   });

//   test("unauth for non-admin", async function () {
//     const resp = await request(app)
//         .post("/workouts")
//         .send(newWorkout)
//         .set("authorization", `Bearer ${u1Token}`);
//     expect(resp.statusCode).toEqual(404);
//   });

//   test("bad request with missing data", async function () {
//     const resp = await request(app)
//         .post("/workouts")
//         .send({
//           userId: 12
//         })
//         .set("authorization", `Bearer ${adminToken}`);
//     expect(resp.statusCode).toEqual(404);
//   });

//   test("bad request with invalid data", async function () {
//     const resp = await request(app)
//         .post("/companies")
//         .send({
//           ...newWorkout,
//           logoUrl:''
//         })
//         .set("authorization", `Bearer ${adminToken}`);
//     expect(resp.statusCode).toEqual(404);
//   });
// });

/************************************** GET /workouts */

describe("GET /workouts", function () {
  let user1
  test('example test', async () => {
    user1 = await User.get('u1')
  });
  test("ok for admin", async function () {
    const resp = await request(app).get(`/workouts/${user1.id}`)
    .set("authorization", `Bearer ${adminToken}`);;
    console.log(resp.body)
    expect(resp.body).toEqual({
      workouts: {
        workoutId: expect.any(Number),
        createdAt: expect.any(String),
        data: expect.any(Array)
      }
    });
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

//   test("not found for no such company", async function () {
//     const resp = await request(app).get(`/companies/nope`);
//     expect(resp.statusCode).toEqual(404);
//   });
// });

