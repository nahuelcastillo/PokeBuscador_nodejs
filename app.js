const express = require("express");
const jwt = require(`jsonwebtoken`);
const path = require('path');

const loginmodel = require("./controllers/logincontroller");

//iniciacion de express
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static("public"));
const userRouter = require("./routes/loginroute");

//Solo la ruta del login porque se generaban kaboom
app.post("/login", loginmodel.getUser)



//Trae todas las rutas
app.use("/Profile", userRouter);



app.listen(port, () => {
    console.log(`El servidor esta corriendo en http:localhost:${port}`)
})