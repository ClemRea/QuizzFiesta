const express = require("express");
const quizzController = require("../controllers/quizzController");

const router = express.Router();

router.post("/create-room", quizzController.createRoom);
router.post("/join-room", quizzController.joinRoom);
router.get("/waiting-room/:roomCode", quizzController.getWaitingRoom);

module.exports = router;
