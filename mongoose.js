const mongoose = require('mongoose');
const express = require("express");
const app = express();
app.use(express.json())
require("./mongose/Config/androidConfig");
const Schemaas = require("./mongose/Schemas/Schemaas");




// app.post("/book", async(req, res)=> {
//       const data =new Schema.book(req.body);
//       const  result = data.save();
//       console.log(result);
//     res.send(result);
// })

app.get("/list", async(req, res)=> {
    const data = await Schemaas.find();
    console.log(data);
    res.send(data);
})
app.get("/", (req, res)=> {

    res.send("App is running on port 9000 that we got")
})


app.listen(9000, (req, res)=>{

console.log(`app is running on http://localhost:${9000}`);


})