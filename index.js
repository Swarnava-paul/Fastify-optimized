
const express = require('express')
const PORT = 8005;
const status = require('express-status-monitor')

const server = express() ;

const {router} = require('./router/route')

server.use('/',router)
server.use(status())

server.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
})