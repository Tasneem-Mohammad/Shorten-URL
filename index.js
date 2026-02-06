import express from "express";
import {connectDb}  from "./connect.js";
import path from "path";
import cookieParser from "cookie-parser";
import {restrictoLoggedInUsersOnly , checkAuth} from "./middleware/auth.js"

import staticRoute from "./routes/staticRoute.js";
import UrlRoute from "./routes/url.js";
import userRouter from "./routes/user.js"

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
app.use(cookieParser());

// handle the view
app.use('/url' ,restrictoLoggedInUsersOnly , UrlRoute);
app.use('/user' , userRouter);
app.use('/' , checkAuth , staticRoute);


app.listen(port , ()=> console.log(`SERVER STARTED AT PORT : ${port}`));