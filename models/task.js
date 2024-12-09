// <------------------------------------------- Imports and Configuration ------------------------------->
const  mongoose = require ('mongoose');
// <------------------------------------------- Schemas ------------------------------------------------->
const taskSchema = new mongoose.Schema({
    Item: String,
    Due : String,
    Notes: String
})
// <------------------------------------------- Model ---------------------------------------------------->
const Task = mongoose.model('Task', taskSchema);
// <------------------------------------------- Export --------------------------------------------------->
module.exports = Task;