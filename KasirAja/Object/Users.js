const request = require('supertest')
const env = require('../env.js')
const {updateUsers} = require('../Data/User')

async function createUser(payload, token){
    const response = await request(env.url).post('/users')
    .send(payload)
    .set({
        "Authorization": `Bearer ${token}`
    })
    return (await response)
}

async function getAllUser(token){
    const response = await request(env.url).get('/users')
    .set({
        "Authorization": `Bearer ${token}`
    })
    return (await response)
}

async function getUserDetail(userId, token){
    const response = await request(env.url).get(`/users/${userId}`)
    .set({
        "Authorization": `Bearer ${token}`
    })
    return (await response)
}

async function updateUser(userId, token){
    const response = await request(env.url).put(`/users/${userId}`)
    .send(updateUsers)
    .set({
        "Authorization": `Bearer ${token}`
    })
    return (await response)
}

async function deleteUser(userId, token){
    const response = await request(env.url).del(`/users/${userId}`)
    .set({
        "Authorization": `Bearer ${token}`
    })
    return (await response)
}

module.exports = {
    createUser, getAllUser, getUserDetail, updateUser, deleteUser
}