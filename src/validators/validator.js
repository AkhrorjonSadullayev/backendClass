import { validationResult } from "express-validator";

export const validate = (req,res, next) =>{
    const error = validationResult(req);

    if(error.isEmpty()){
        return
    }

    let messages = "";

    error.array().map((err) => {
        messages += err.msg + ' '
    });

   return res.status(422).json({success:false, error: { messages }});
};