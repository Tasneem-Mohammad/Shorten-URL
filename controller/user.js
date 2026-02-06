import User from "../models/user.js"
import { v4 as uuidv4 } from 'uuid';
import { setUser } from "../service/auth.js";
export async function handleUserSignup(req , res) {
    const {name , email , password} = req.body;
    await User.create({
        name,
        email, 
        password,
    });

    return res.redirect("/")
}

export async function handleUserlogin(req , res) {
    const {email , password} = req.body;
    const user = await User.findOne({email , password})
    if(!user){
        return res.render('login',{
            error:"Invalid Username or Password"
        })
    }

    const sessionId = uuidv4();
    // set the id and cookie  
    setUser(sessionId , user);
    console.log("USER:", user);
    
    res.cookie("uid" , sessionId);
    return res.redirect("/")
}

