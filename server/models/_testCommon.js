const bcrypt = require("bcrypt");

const db = require("../db.js");
const { BCRYPT_WORK_FACTOR } = require("../config");

async function commonBeforeAll() {
  // noinspection SqlWithoutWhere
  await db.query("DELETE FROM workouts");
  // noinspection SqlWithoutWhere
  await db.query("DELETE FROM users");
  
  const data = [{
    "movementName" : "test",
    "movementAbbrv": "TST",
    "type" : "regular",
    "rest": 2,
    "work": 2,
    "rounds": 1,
    "id": "hhh4444"
  }]

  const dataArray = JSON.stringify(data)

  // await db.query({
  //   text: 'INSERT INTO workouts(user_id, name, description, data) VALUES ($1, $2, $3, $4)',
  //   values: [389, 'w1', 'W1', dataArray]
  // });

  // await db.query(`
  //   INSERT INTO workouts(user_id, name, description, data)
  //   VALUES (389, 'w1', 'W1', ${dataArray})`);

  await db.query(`
        INSERT INTO users(username,
                          password,
                          first_name,
                          last_name,
                          email)
        VALUES ('u1', $1, 'U1F', 'U1L', 'u1@email.com'),
               ('u2', $2, 'U2F', 'U2L', 'u2@email.com')
        RETURNING username`,
      [
        await bcrypt.hash("password1", BCRYPT_WORK_FACTOR),
        await bcrypt.hash("password2", BCRYPT_WORK_FACTOR),
      ]);
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


module.exports = {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll
};