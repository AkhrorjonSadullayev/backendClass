export const router = Router();
import { Router } from 'express';
import { DeleteTodo, getAllTodo, getByIdTodo, todoAdd, UpdateTodo } from '../../controllers/todo/todo.conroller.js';


// const test = (req,res,next) =>{
//     // console.log(req.body);
//     // next()
//     const { title,desc } = req.body
//     if(typeof title !== 'string' || title === ""  || title.length >= 5){
//         return res.status(400).json({success:false,msg:'Title must a be string and not empty!'})
//     }
//     if(typeof desc !== 'string' || desc === "" ){
//         return res.status(400).json({success:false,msg:'Title must a be stirng and not empty!'})
//     }

//     next();
// }
import { validate } from '../../validators/validator.js';
import { addV, updateV } from '../../validators/todo/todo.validator.js';

router.post("/add", addV() ,validate, todoAdd)// (malumotlarni qo'shish uchun ishlatamiz!!!!)

router.put('/edit/:id',updateV(),validate, UpdateTodo)//datani edit qilish uchun ishlatiladi

router.get('/get/:id',getByIdTodo) // datani idsi bo'yicha qabul qilib olish

router.get('/get-all',getAllTodo)// barcha datani chaqirib olishga ishlatiladi

router.delete('/delete/:id',DeleteTodo )//datani o'chirib yuborish usuli

