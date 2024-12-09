const mongoose = require("mongoose");

const connectDB = async()=>{
    try {
        const db = await mongoose.connect(process.env.DB_URL);
        const {name, host} = db.connection;
        console.log(`nombre de la BD ${name} y el servidor ${host}`);
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;