import { Router } from 'express';
import { todoAdd } from '../../controllers/todo/todo.conroller.js';
export const router = Router();

router.post("/add", todoAdd)// (malumotlarni qo'shish uchun ishlatamiz!!!!)

router.put('/edit/:id',(req,res)=>{
    const {title,desc} = req.body;

    const { id } = req.params;

    const index = todo.findIndex((val) => val.id === id);

    todo.splice(index,1,{id,title,desc});

    res.status(200).json({success:true,todo})
})//datani edit qilish uchun ishlatiladi

router.get('/get/:id',(req,res)=>{
    const { id } = req.params;

    const data = todo.find((val) => val.id === id)

    res.status(200).json({success:true,data})
}) // datani idsi bo'yicha qabul qilib olish

router.get('/get-all',(req,res)=>{
    const { search } = req.query;
     
    const data = todo.includes(search);

    console.log(data);

    res.status(200).json({success:true,todo});
})// barcha datani chaqirib olishga ishlatiladi

router.delete('/delete/:id', (req,res) => {
    const { title, desc } = req.body;
    const { id } = req.params; 

    const index = todo.findIndex((val) => val.id === id);

    todo.splice(index,1,{ id,title,desc })

    res.status(200).json({success:true,todo})
})//datani o'chirib yuborish usuli

