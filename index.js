const express = require("express");

const app = express();

const articulosfamiliasmockRouter = require("./routes/articulosfamiliasmock");

app.use(articulosfamiliasmockRouter);
app.use(express.json());
app.get("/", (req,res)=>{
    res.send("Backend inicial dds-backemd!");
});

const port = 3000;
app.listen(port, ()=>{
    console.log(`sitio escuchando en el puerto ${port}`);
});