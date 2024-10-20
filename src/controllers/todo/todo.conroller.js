import { v4 } from "uuid";
const todo = [];


export const todoAdd = (req,res)=>{
    const { title,desc } = req.body;
    console.log(title,desc);

    todo.push({id:v4(),title,desc});

    res.status(201).json({success:true,todo})
}