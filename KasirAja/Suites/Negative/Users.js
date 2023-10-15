const { createUser, getUserDetail, updateUser, deleteUser } = require("../../Object/Users")
const {invalidUser} = require('../../Data/User')
const login = require("../../Object/Login")
const { expect } = require("chai")

describe('CRUD Negative RESTFULL Users',()=>{
    let token
    let userId
    before(async() => {
        const respLogin = await login()
        token = respLogin.body.data.accessToken
    })
    
    it('Failed create user', async () =>{
        setTimeout
        const respCreateUser = await createUser(invalidUser, token)
        expect (respCreateUser.status).equal(400)
    })

    
    it('Failed get detail user', async () =>{
        const respGetDetailUser = await getUserDetail(userId, token)
        expect (respGetDetailUser.status).equal(404)
    })

    it('Failed update user', async () =>{
        const respUpdateUser = await updateUser(userId, token)
        expect (respUpdateUser.status).equal(404)
    })

    it('Failed delete user', async () =>{
        const respDeleteUser = await deleteUser(userId, token)
        expect (respDeleteUser.status).equal(404)
    })

})