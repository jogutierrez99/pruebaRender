const express = require("express");
const router = express.Router();

const {addEvent, getAll, getBydId, updateEvent, deleteEventById, getByDate, getTypeOfSport, getDateFromTo} = require("../../controllers/event.controllers");
const {checkToken} = require("../../middleware/auth");

router.post("/", checkToken , addEvent);
router.get("/", checkToken , getAll);
//Preguntar como ponerlo bien --> 
//si van debajo de las otras se pilla por la variable
router.get("/upcoming", checkToken , getByDate);
//Preguntar
router.get("/sport", checkToken , getTypeOfSport);
router.get("/date", getDateFromTo);

router.get("/:eventId", checkToken , getBydId);
router.put("/:eventId", checkToken , updateEvent);
router.delete("/:eventId", checkToken , deleteEventById);







module.exports = router;
