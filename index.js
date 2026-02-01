import express from "express";
import UrlRoute from "./routes/url.js";
import {connectDb}  from "./connect.js";
const app = express();
const port = 8081;


connectDb('mongodb://localhost:27017/short_url')
.then(()=> {
    console.log("Connected mongoDb")
})

app.use(express.json()); 

app.use("/url" , UrlRoute);

app.get('/:shortId' , UrlRoute)

app.listen(port , ()=> console.log(`SERVER STARTED AT PORT : ${port}`));