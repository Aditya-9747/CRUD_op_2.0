const task = require("../models/task.model");

const gettasks = async (req, res) => {
  try {
    const tasks = await task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const gettask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await task.findById(id);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createtask = async (req, res) => {
  try {
    const task = await task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatetask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await task.findByIdAndUpdate(id, req.body);

    if (!task) {
      return res.status(404).json({ message: "task not found" });
    }

    const updatedtask = await task.findById(id);
    res.status(200).json(updatedtask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletetask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await task.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).json({ message: "task not found" });
    }

    res.status(200).json({ message: "task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  gettasks,
  gettask,
  createtask,
  updatetask,
  deletetask,
};