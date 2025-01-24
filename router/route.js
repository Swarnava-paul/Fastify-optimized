
const express = require('express')
const fs = require('node:fs');

const router = express.Router();

router.get('/read',(req,res)=>{
const file = fs.createReadStream('./index.txt');
file.on('data',(data)=>{
res.write(data);
})
file.on('end',()=>{
    res.end();
})
})

router.get('/test2',(req,res)=>{
    res.send('test 2')
})
router.get('/ip',(req,res)=>{
    res.send({ip:req.ip})
})

module.exports = {
    router
}