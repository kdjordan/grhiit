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
    const workouts = result.rows;
  
    return workouts;
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

  static async getWorkout(id) {
    const result = await db.query(
      `SELECT data 
        FROM workouts 
        WHERE id = $1`,
      [id]
    );
    
    if (result.rows.length === 0) throw new NotFoundError(`No workout: ${id}`);
    
    const workout = result.rows[0].data;
    return workout;
  }

}


module.exports = Workout;
