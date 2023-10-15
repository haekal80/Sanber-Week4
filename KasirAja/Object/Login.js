const request = require('supertest')
const env = require('../env.js')
const {validLogin} = require ('../Data/User')

async function login(){
    const response = await request(env.url)
    .post('/authentications')
    .send(validLogin)
    return response
}

module.exports = login