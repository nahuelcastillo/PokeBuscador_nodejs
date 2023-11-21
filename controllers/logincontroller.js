const loginmodel = require("../models/loginmodel");


const getUsers = async (req, res)=>{
    const login = await loginmodel.getUsers()
    res.json(login)
};

const getUser = async(req, res) =>{
    const name = req.body
    const user = await loginmodel.getUser(name)
    if(user){
        res.json(user);
    }else{
        res.status(404).json({ message: "Usuario no encontrado" });
    }
    
}

const createUser = async(req, res)=>{
    const createUser = await loginmodel.createUser(req.body)
    if(createUser){
        res.json(createUser)
    } else{
        res.status(500).json({ message: "Se rompió el servidor" });
    }
}


const UpdateUser = async(req, res) =>{
    const name = req.params.playerName
    const UpadateUser = await loginmodel.UpdateUser(name, req.body)
    if(UpadateUser){
        res.json(UpadateUser)
    }else{
        res.status(500).json({ message: "No se pudo actualizar el pokemon"})
    }
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    UpdateUser
}
