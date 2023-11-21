const express = require("express");
const loginmodel = require("../controllers/logincontroller");
const loginrouter = express.Router()

loginrouter.get("/", loginmodel.getUsers)

loginrouter.post("/", loginmodel.createUser)

loginrouter.put("/:playerName", loginmodel.UpdateUser)



module.exports = loginrouter;