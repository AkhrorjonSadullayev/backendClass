// const os = require('os')

// console.log(os.cpus());
// console.log(os.arch());
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.hostname());
// console.log(os.type());
// console.log(os.version());
// console.log(os.userInfo());
// console.log(os.machine());
// console.log(os.platform());


// import http from 'http';

// const server = http.createServer((req, res)=>{
//      res.statusCode = 200;
//      res.setHeader('Content-Type', 'text/plain');
//      res.end('Hello World!')
// })
// server.listen(8080,()=>{
//     console.log('Server run!');
// })







// const express = require('express');
// const fs = require ('fs');
// const path = require ('path');
// const server = express();

// server.get('/create-folder',  (req, res) => {
//     fs.mkdir(path.join(__dirname,"bismillah"),{},(err)=>{
//     if(err){
//         throw err
//     }
//     })
//     res.status(200).json({success:true, message:"file created successfully"})
// }),

// server.get('/delete-folder',  (req, res) => {
//     fs.rmdir(path.join(__dirname,"bismillah"),(err)=>{
//     if(err){
//         throw err
//         }
// })
//     res.status(200).json({success:true, message:"file deleted successfully"})
// })


// server.listen(8080,()=>{
//     console.log("Server Run!");
// })