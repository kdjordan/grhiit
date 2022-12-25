"use strict";

const db = require("../db");
const { BadRequestError, NotFoundError } = require("../expressError");
const { sqlForPartialUpdate } = require("../helpers/sql");

/** Related functions for companies. */

class Workout {
  /** Create a workout (from userId), update db, return new workout ID.
   *
   * data should be { userId, difficulty }
   *
   * Returns { workoutId }
   *
   * */
  static async create(userId, obj) {
    const newData = JSON.stringify(obj.data)
    
    const result = await db.query(
      `INSERT INTO workouts
       (user_id, name, description, data)
       VALUES ($1, $2, $3, $4)
       RETURNING id AS "workoutId", created_at AS "createdAt"`,
      [
        userId,
        obj.workoutName,
        obj.workoutDesc,
        newData
      ]
    );
    
    
    const workout = result.rows[0];
  
    return workout;
  }
  

  /** Find all companies (optional filter on searchFilters).
   *
   * searchFilters (all optional):
   * - minEmployees
   * - maxEmployees
   * - name (will find case-insensitive, partial matches)
   *
   * Returns [{ handle, name, description, numEmployees, logoUrl }, ...]
   * */

  static async findAll(id) {
    const result = await db.query(
      `SELECT * 
        FROM workouts 
        WHERE user_id = $1`,
      [id]
    );
    const workouts = result.rows[0];
  
    return workouts;
  }

  /** Given a company handle, return data about company.
   *
   * Returns { handle, name, description, numEmployees, logoUrl, jobs }
   *   where jobs is [{ id, title, salary, equity }, ...]
   *
   * Throws NotFoundError if not found.
   **/

  static async get(handle) {
    const sessionRes = await db.query(
          `SELECT handle,
                  name,
                  description,
                  num_employees AS "numEmployees",
                  logo_url AS "logoUrl"
           FROM companies
           WHERE handle = $1`,
        [handle]);

    const session = sessionRes.rows[0];

    if (!session) throw new NotFoundError(`No session: ${handle}`);

    const jobsRes = await db.query(
          `SELECT id, title, salary, equity
           FROM jobs
           WHERE company_handle = $1
           ORDER BY id`,
        [handle],
    );

    session.jobs = jobsRes.rows;

    return session;
  }

  /** Update company data with `data`.
   *
   * This is a "partial update" --- it's fine if data doesn't contain all the
   * fields; this only changes provided ones.
   *
   * Data can include: {name, description, numEmployees, logoUrl}
   *
   * Returns {handle, name, description, numEmployees, logoUrl}
   *
   * Throws NotFoundError if not found.
   */

  static async update(handle, data) {
    const { setCols, values } = sqlForPartialUpdate(
        data,
        {
          numEmployees: "num_employees",
          logoUrl: "logo_url",
        });
    const handleVarIdx = "$" + (values.length + 1);

    const querySql = `UPDATE companies 
                      SET ${setCols} 
                      WHERE handle = ${handleVarIdx} 
                      RETURNING handle, 
                                name, 
                                description, 
                                num_employees AS "numEmployees", 
                                logo_url AS "logoUrl"`;
    const result = await db.query(querySql, [...values, handle]);
    const company = result.rows[0];

    if (!company) throw new NotFoundError(`No company: ${handle}`);

    return company;
  }

  /** Delete given company from database; returns undefined.
   *
   * Throws NotFoundError if company not found.
   **/

  static async remove(handle) {
    const result = await db.query(
          `DELETE
           FROM companies
           WHERE handle = $1
           RETURNING handle`,
        [handle]);
    const company = result.rows[0];

    if (!company) throw new NotFoundError(`No company: ${handle}`);
  }
}


module.exports = Workout;
