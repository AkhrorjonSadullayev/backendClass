import { Schema,model } from "mongoose";
import { DB_CONSTANTS } from "../../constants/db.constants.js";
const todoSchema = new Schema({
    title: { type:String, required:true },
    desc: { type:String, required:true }
},
{ timestamps:{createdAt:"created_at",updatedAt:"updated_at"},versionKey:false  }
);

export const Todo = model(DB_CONSTANTS.TODO, todoSchema, DB_CONSTANTS.TODO)
