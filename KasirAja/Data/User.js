const validLogin = {
    "email": "haekal@mail.com",
    "password": "password"
}

const validUser = {
    "name": "kasir haekal",
    "email": "haekal@kasir.com",
    "password": "password"
}

const invalidUser = {
    "name": "kasir haekal",
    "email": "",
    "password": "password"
}

const updateUsers = {
    "name": "kasir haekal update",
    "email": "haekal@kasir.com"
}

module.exports={validUser, invalidUser, updateUsers, validLogin}