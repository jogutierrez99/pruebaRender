const Users = require("../models/user.model");
const bcrypt = require("bcryptjs");
const {createToken} = require("../../utils/jwt");

const register = async (req,res) =>{

    try {
        //recibo los datos
        const newUser = req.body;

        //Valido si el usuario ya existe en la BD
        const userDB = await Users.find({username: newUser.username})
        //Si existe envio error de respuesta
        if(userDB.length !== 0){
            return res.json({msg:"el usuario ya existe"});
        }
        //Si no existe --> Encripto la contraseña y lo añado
        newUser.password = await bcrypt.hash(newUser.password, 10);

        const user = await Users.create(newUser);

        return res.json({msg:"Usuario creado", user});

    } catch (error) {
        console.log(error)
    }
}

const login = async (req, res) =>{

    try {

        //recibo los datos
        const {username , password} = req.body;
        //verificar que el email existe ---> findOne

        const userDB = await Users.findOne({username})
        if(!userDB){
            return res.json({msg: "El usuario no existe"});
        }

        //comparar la contraseña del usuario con la password de la BD  -- bycrypt.compare()

        const same = await bcrypt.compare(password, userDB.password);
        //devuelve true o false si coinciden o no
        
        if(!same){
            //si no coinciden las contraseñas envio mensaje de error
            return res.json("La contraseña es incorrecta");
        }
    
        // si coinciden creo el token

//const token = createToken(userDB);
       return res.json({
            msg: "login exitoso",
            token: createToken(userDB)
        })
        
    } catch (error) {

        console.log(error)
        
    }

}

const getProfile = async (req, res) => {
    
    //console.log(req.body.username);
    const dataUser = await Users.find({username:req.user.username});
    return res.json(dataUser);

}



module.exports = {register, login, getProfile};