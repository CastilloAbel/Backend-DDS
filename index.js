const express = require("express");

const app = express();

app.get("/", (req,res)=>{
    res.send("Backend inicial dds-backemd!");
});

const port = 3000;
app.listen(port, ()=>{
    console.log(`sitio escuchando en el puerto ${port}`);
});