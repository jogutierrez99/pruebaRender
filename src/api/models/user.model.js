const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: {type:String, require:true, unique:true},
        password:{type:String, require: true},
    },
    {
        collection : "users",
        timestamps : true //Crea en la coleccion: createdAt, updatedAt
    }
);

const Users =  mongoose.model("users", userSchema);
module.exports = Users;