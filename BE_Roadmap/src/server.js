import bodyParser from "body-parser";
import express from "express";
import viewEngine from "./config/viewEngine";
import initWebRoute from "./route/web";
require("dotenv").config();

let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoute(app);

let port = process.env.PORT || 8000;
//PORT === undefined => PORT = 8000

app.listen(port, () => {
  //callback
  console.log("Backend Nodejs is running on the port: " + port);
});
