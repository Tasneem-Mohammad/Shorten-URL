import express from "express";
import UrlRoute from "./routes/url.js";
import {connectDb}  from "./connect.js";
import URL from "./models/url.js"
import path from "path";
import staticRoute from "./routes/staticRoute.js";

const app = express();
const port = 8081;


connectDb('mongodb://localhost:27017/short_url')
.then(()=> {
    console.log("Connected mongoDb")
})

// views using ejs
app.set("view engine" , "ejs");
app.set('views' , path.resolve("./view"));

///middles ware for both json and form data
app.use(express.json()); 
app.use(express.urlencoded({extended : false}))

// handle the view
app.use('/' , staticRoute);
app.use("/url" , UrlRoute);

app.listen(port , ()=> console.log(`SERVER STARTED AT PORT : ${port}`));