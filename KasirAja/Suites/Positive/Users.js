const { createUser, getUserDetail, updateUser, deleteUser } = require("../../Object/Users")
const {validUser} = require('../../Data/User')
const login = require("../../Object/Login")
const { expect } = require("chai")

describe('CRUD Positive RESTFULL Users',(done)=>{
    let token
    let userId
    before(async() => {
        const respLogin = await login()
        token = respLogin.body.data.accessToken
    })
    
    it('Success create user', async () =>{
        const respCreateUser = await createUser(validUser, token)
        userId = await respCreateUser.body.data.userId
        expect (respCreateUser.status).equal(201)
    })

    
    it('Success get detail user', async () =>{
        const respGetDetailUser = await getUserDetail(userId, token)
        expect (respGetDetailUser.status).equal(200)
    })

    it('Success update user', async () =>{
        const respUpdateUser = await updateUser(userId, token)
        expect (respUpdateUser.status).equal(200)
    })

    it('Success delete user', async () =>{
        const respDeleteUser = await deleteUser(userId, token)
        expect (respDeleteUser.status).equal(200)
    })

})