import express from "express";
import {HandleGenerateShortUrl , handleGetAnalytics , HandleRedirection} from "../controller/url.js";

const router = express.Router();

router.post("/" , HandleGenerateShortUrl);


router.get("/analytics/:shortId" , handleGetAnalytics);

router.get('/:shortId' , HandleRedirection);

export default router;