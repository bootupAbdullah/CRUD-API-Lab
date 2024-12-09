// <------------------------------------------- MODEL IMPORT --------------------------------------->
const Task = require('../models/task');

// <------------------------------------------- POST ROUTE-------------------------------->
// #1
// HTTP POST - 
const createTask = async (req, res) => {
    const createTask = await Task.create(req.body)
    res.json(createTask)
}

// <------------------------------------------- GET ROUTE-------------------------------->
// #2
// HTTP GET - 
const findTask = async (req, res) => {
    const foundTask = await Task.find()
    res.json(foundTask)
}

// <------------------------------------------- GET ROUTE-------------------------------->
// #3
// HTTP DELETE -
const deletTask = async (req, res) => {
    const deletedTask = await Task.findByIdAndDelete(req.params.taskId)
    res.json(deletedTask)
}

// <------------------------------------------- GET ROUTE-------------------------------->
// #3
// HTTP UPDATE -
 const updateTask = async (req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(
        req.params.taskId, 
        req.body, 
        {new:true}
    )
    res.json(updatedTask)
 }

// <--------------------------------------------EXPORTS ------------------------------------------------------>

module.exports = {
   createTask,
   findTask,
   deletTask,
   updateTask
}