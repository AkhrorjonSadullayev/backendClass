import { Todo } from "../../models/todo/todo.model.js";
import { HttpException } from "../../utils/http.exception.js";
import {StatusCodes, ReasonPhrases } from 'http-status-codes'
import { asyncHadler } from "../../middleware/async-hadler.middleware.js";

export const todoAdd = asyncHadler(async (req,res)=>{
        const { title,desc } = req.body;

        const new_todo =  await Todo.create({title,desc});
    
        res.status(201).json({success:true,todo:new_todo})
    } 
);

export const getAllTodo = async (req,res)=>{
    const { search } = req.query;

    const query = {};

    if(search){
      query.$or = [];

      query.$or.push(
        {title:{$regex:search, $options: 'i'}},
        {desc:{$regex:search, $options: 'i'}})
    }


    const data = await Todo.find(query)

    res.status(200).json({success:true,data});
};

export const getByIdTodo = asyncHadler( async  (req,res)=>{
           const { id } = req.params;
           const data =  await Todo.findById(id);
           
           if(!data){
               throw new HttpException(
                   StatusCodes.NOT_FOUND,
                   ReasonPhrases.NOT_FOUND,
                   "Todo not found"
               );
           }
   
       res.status(StatusCodes.OK).json({success:true,data})
   })

export const UpdateTodo = async (req,res)=>{
    const {title,desc} = req.body;
    const { id } = req.params;

    const todo = await Todo.findById(id);
    if(!todo){
        throw new HttpException(StatusCodes.NOT_FOUND,ReasonPhrases.NOT_FOUND,"Todo not found");
    }

    const data = await Todo.findByIdAndUpdate(id,{ title,desc },{ new:true })

    res.status(200).json({success:true,data})
};

export const DeleteTodo = async (req,res) => {
    const { id } = req.params; 

    await Todo.findByIdAndDelete(id)

    res.status(200).json({success:true,msg:"Successfully deleted!"})
};
