const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {type: String, require:true},
    description: {type:String, require:true},
    date: {type:Date, require:true},
    localization: {type:String, require:true},
    typeOfSport: {type:String, require:true},
    organizator:[{type: Schema.Types.ObjectId, ref: "users"}]
},
{

});

const Event = mongoose.model("events", eventSchema);
module.exports = Event;