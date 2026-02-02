import express from "express";
import URL from "../models/url.js";

const router = express.Router();


router.get('/home' , async(req , res)=>{
    const allURLS =await URL.find({});
    res.render('home')

    // {urls: allURLS}-> 
    // im passing this too in the generateshorturl one 
    // dont ask why
    
})
export default router;