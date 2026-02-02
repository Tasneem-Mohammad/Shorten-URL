import {nanoid} from "nanoid";
import URL from "../models/url.js";

export async function HandleGenerateShortUrl(req , res) {
    const { url } = req.body;
 
    if(!url) return res.status(400).send({error : "URL is required"});
    const shortId = nanoid(8);

    await URL.create({
        shortId : shortId,
        redirect: url,
        VisitHistory: [],
    })

     const allURLS =await URL.find({});

    return res.render("home" , {
        id: shortId,
        urls: allURLS, 
    })
    //return res.json({id : shortId});
}

export async function handleGetAnalytics(req , res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId})

    if (!result) {
    return res.status(404).json({ error: "URL not found" });
    }

    return res.json({totalClick : result.VisitHistory.length , analytics : result.VisitHistory})
}

export async function HandleRedirection(req , res){
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {shortId},
        { 
            $push : {
                VisitHistory : {timestamp : Date.now()}
            }
        },
        {new : true}
    );
    res.redirect(entry.redirect)
}