import { Router } from 'express';
import { DeleteTodo, getAllTodo, getByIdTodo, todoAdd, UpdateTodo } from '../../controllers/todo/todo.conroller.js';
export const router = Router();

router.post("/add", todoAdd)// (malumotlarni qo'shish uchun ishlatamiz!!!!)

router.put('/edit/:id',UpdateTodo)//datani edit qilish uchun ishlatiladi

router.get('/get/:id',getByIdTodo) // datani idsi bo'yicha qabul qilib olish

router.get('/get-all',getAllTodo)// barcha datani chaqirib olishga ishlatiladi

router.delete('/delete/:id',DeleteTodo )//datani o'chirib yuborish usuli

