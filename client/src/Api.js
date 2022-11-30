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
  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`)
    return res.company;
  }

  static async getCompanies(name) {
    let res = await this.request('companies', {name})
    return res.companies;
  }

  static async getJobs(title) {
    let res = await this.request('jobs', { title })
    return res.jobs;
  }

  static async getUser(username) {
    console.log('in API ', username)
    // let res = await this.request(`users/${username}`)
    let res = await this.request(`users/${username}`)
    return res.user
  }

  static async patchUser(username, data) {
    let res = await this.request(`users/${username}`, data, 'patch')
    return res.user
  }

  static async applyToJob(username, id) {
    await this.request(`users/${username}/jobs/${id}`, {}, "post");
  }
}

export default Grhiit;
