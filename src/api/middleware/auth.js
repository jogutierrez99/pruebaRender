const jwt = require("jsonwebtoken");
const Users = require("../models/user.model");

//req.authorization

//Validar el token y el rol

const checkToken = async (req, res, next) => {
    //Validar que el token que me envias es correcto
    if(!req.headers["authorization"]){
        return res.json({msg:"Debe incluir el token"});
    }

    const token = req.headers["authorization"];
    //bearer 
    console.log(token);

    let data
    try {
        const tokenUser = token.split(" ")[1];
        console.log("toke usuario: " + tokenUser);
        data = jwt.verify(tokenUser, process.env.SECRET_KEY_JWT);
    } catch (error) {

        return res.json({msg:"token incorrecto"});
        
    }

    //buscar en la BD el token del usuario
    const user = await Users.findById(data.user_id);

    if(!user){
        return res.json({msg:"El usuario no existe"});
    }

    //envio los datos del usuario al controlador
    req.user = user;

    next();


};

module.exports = {checkToken}