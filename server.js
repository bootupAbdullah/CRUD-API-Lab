// <------------------------------------------- IMPORT AND CONFIGURATION -------------------------->
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')
// <------------------------------------------- DATABASE CONNECTION------------------------------->
mongoose.connect(process.env.MONGODB_URI);
// log connection status to terminal on start
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
  });

// <------------------------------------------- CONRTROLLERS ------------------------------------->
const tasksCtrl = require("./controllers/tasks")
// <------------------------------------------- MIDDLEWARE --------------------------------------->
app.use(express.json());
app.use(cors())

// !! <-----------------------------------------ROUTES -------------------------------------------->

// <---------------------------------------------- POST ROUTE ------------------------------------->
// #1
app.post('/tasks', tasksCtrl.createTask);

// <---------------------------------------------- GET ROUTE ------------------------------------->
// #2
app.get('/tasks', tasksCtrl.findTask);

// <---------------------------------------------- DELETE ROUTE ----------------------------------->
// #3
app.delete('/tasks/:taskId', tasksCtrl.deletTask);

// <---------------------------------------------- PUT ROUTE -------------------------------------->
// #4
app.put('/tasks/:taskId', tasksCtrl.updateTask);


// <------------------------------------------- Start Server --------------------------------------->
app.listen(3000, () => {
  console.log('The express app is ready!');
});