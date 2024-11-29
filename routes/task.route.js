const express = require("express");
const task = require("../models/task.model.js");
const router = express.Router();
const {gettasks, gettask, createtask, updatetask, deletetask} = require('../controllers/task.controller.js');


router.get('/', gettasks);
router.get("/:id", gettask);

router.post("/", createtask);

// update a task
router.put("/:id", updatetask);

// delete a task
router.delete("/:id", deletetask);




module.exports = router;