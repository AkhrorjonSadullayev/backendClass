import { Schema,model } from "mongoose";
import { DB_CONSTANTS } from "../../constants/db.constants.js";

const userSchema = new Schema({
    full_name: { type:String, required:true },
    email: { type:String, required: true, unique: true },
    phone_number: { type:String, required: true },
    password: { type:String, required:true, select: false }
},
{ timestamps:{createdAt:"created_at",updatedAt:"updated_at"},
versionKey:false  }
);

export const User = model(DB_CONSTANTS.USER, userSchema, DB_CONSTANTS.USER)
