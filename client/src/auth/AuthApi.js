import axios from "axios";
// require('dotenv').config()

// const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";
const BASE_URL = "http://localhost:3001";
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjksInVzZXJuYW1lIjoia2Rqb3JkYW4iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjcyMzgwNDgxfQ.oitHsaR_CQEWuhHlegLDiD65OvzPmY5b9m98V-pgnU8
/* 
  controls all Auth API calls
*/

class Auth {
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

  static async login(user) {
    let res = await this.request(`auth/token`, user, 'POST')
    console.log('set token ', res.token)
    return res.token;
  }
  static async signup(user) {
    let res = await this.request(`auth/register`, user, 'POST')
    return res.token;
  }

}

export default Auth