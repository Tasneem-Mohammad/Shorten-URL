import mongoose from "mongoose";

const urlSchema = mongoose.Schema({
    shortId:{
        type : String,
        required : true,
        unique  : true,
    },

    redirect :{
        type : String,
        required : true,
    },

    VisitHistory :[{ timestamp : {
        type: Number
    }}],

    createBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "users",
    }

}, {timestamps : true});

const URL  = mongoose.model("url" , urlSchema);
export default URL;
