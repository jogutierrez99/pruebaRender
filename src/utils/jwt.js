const jwt = require("jsonwebtoken");

const createToken = (info)=>{

    const data = {
        user_id: info._id,
        user_username: info.username
    }

    console.log(info._id + " " + info.username);

    return jwt.sign(data, process.env.SECRET_KEY_JWT, {expiresIn:"1h"})

}

module.exports = {createToken}