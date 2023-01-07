"use strict";

const db = require("../db.js");

const User = require("../models/user");
const Workout = require("../models/workout");
const { createToken } = require("../helpers/tokens");

async function commonBeforeAll() {
  // noinspection SqlWithoutWhere
  await db.query("DELETE FROM users");
  // noinspection SqlWithoutWhere
  await db.query("DELETE FROM workouts");

    const user1 = await User.register({
      username: "u1",
      firstName: "U1F",
      lastName: "U1L",
      email: "user1@user.com",
      password: "password1",
      isAdmin: false,
    });
    const user2 = await User.register({
      username: "u2",
      firstName: "U2F",
      lastName: "U2L",
      email: "user2@user.com",
      password: "password2",
      isAdmin: false,
    });
    const user3 = await User.register({
      username: "u3",
      firstName: "U3F",
      lastName: "U3L",
      email: "user3@user.com",
      password: "password3",
      isAdmin: false,
    });
    
    await Workout.create(user1.userId,
        {
          workoutName: "W1",
          workoutDesc: "Workout1",
          data : [
            {
              movementName : "test",
              movementAbbrv: "TST",
              type : "regular",
              rest: 2,
              work: 2,
              rounds: 1,
              id: "id1"
            },
            {
              movementName : "test2",
              movementAbbrv: "TST2",
              type : "regular",
              rest: 2,
              work: 2,
              rounds: 1,
              id: "id2"
            }
        ]
        });
    await Workout.create(user2.userId,
        {
          workoutName: "W2",
          workoutDesc: "Workout2",
          data : [
            {
              movementName : "test2",
              movementAbbrv: "TST2",
              type : "regular",
              rest: 2,
              work: 2,
              rounds: 1,
              id: "id3"
            },
            {
              movementName : "test3",
              movementAbbrv: "TST3",
              type : "regular",
              rest: 2,
              work: 2,
              rounds: 1,
              id: "id4"
            }
        ]
        });
    await Workout.create(user3.userId,
        {
          workoutName: "W3",
          workoutDesc: "Workout3",
          data : [
            {
              movementName : "test2",
              movementAbbrv: "TST2",
              type : "regular",
              rest: 2,
              work: 2,
              rounds: 1,
              id: "id5"
            },
            {
              movementName : "test3",
              movementAbbrv: "TST3",
              type : "regular",
              rest: 2,
              work: 2,
              rounds: 1,
              id: "id6"
            }
        ]
        });
}

async function commonBeforeEach() {
  await db.query("BEGIN");
}

async function commonAfterEach() {
  await db.query("ROLLBACK");
}

async function commonAfterAll() {
  await db.end();
}

const adminToken = createToken({ username: "admin", isAdmin: true });

module.exports = {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
  adminToken
};
