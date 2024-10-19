import express from "express";
import { v4 } from "uuid";
import { PORT } from "./utils/secrets.js";

const server = express();

server.use(express.json());
server.use(express.urlencoded({extended:true}));


const todo = [];

server.post("/todo/add",(req,res)=>{
    const { title,desc } = req.body;
    console.log(title,desc);

    todo.push({id:v4(),title,desc});

    res.status(201).json({success:true,todo})
})// (malumotlarni qo'shish uchun ishlatamiz!!!!)

server.put('/todo/edit/:id',(req,res)=>{
    const {title,desc} = req.body;

    const { id } = req.params;

    const index = todo.findIndex((val) => val.id === id);

    todo.splice(index,1,{id,title,desc});

    res.status(200).json({success:true,todo})
})//datani edit qilish uchun ishlatiladi

server.get('/todo/get/:id',(req,res)=>{
    const { id } = req.params;

    const data = todo.find((val) => val.id === id)

    res.status(200).json({success:true,data})
}) // datani idsi bo'yicha qabul qilib olish

server.get('/todo/get-all',(req,res)=>{
    const { search } = req.query;
     
    const data = todo.includes(search);

    console.log(data);

    res.status(200).json({success:true,todo});
})// barcha datani chaqirib olishga ishlatiladi

server.delete('/todo/delete/:id', (req,res) => {
    const { title, desc } = req.body;
    const { id } = req.params; 

    const index = todo.findIndex((val) => val.id === id);

    todo.splice(index,1,{ id,title,desc })

    res.status(200).json({success:true,todo})
})//datani o'chirib yuborish usuli

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
});
