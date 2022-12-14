import axios from "axios";
// require('dotenv').config()

// const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";
const BASE_URL = "http://localhost:3001";


/* 
  controls all API calls

*/

class Grhiit {
  static token 
  
  static async request(endpoint, data = {}, method = "get") {


    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${this.token}` }
    const params = (method === "get")
        ? data
        : {}

    try {
      return (await axios({ url, method, data, params, headers })).data
    } catch (err) {
      console.error("API Error:", err.response)
      let message = err.response.data.error.message
      throw Array.isArray(message) ? message : [message]
    }
  }

  // Individual API routes
  static async getUser(username) {
    let res = await this.request(`users/${username}`)
    return res.user
  }

  static async patchUser(username, data) {
    let res = await this.request(`users/${username}`, data, 'patch')
    return res.user
  }

  static async deleteUser(username) {
    let res = await this.request(`users/${username}`, {}, 'delete')
    return res.user
  }

  static async saveWorkout(userId, data) {
    let res = await this.request(`workouts/${userId}`, data, 'post')
    return res.workout
  }

  static async getAllWorkouts(username) {
    let res = await this.request(`workouts/${username}`)
    return res.workouts
  }

  static async getWorkoutById(id) {
      let res = await this.request(`workouts/workout/${id}`)
      return res.workout
  }
}

export default Grhiit;



