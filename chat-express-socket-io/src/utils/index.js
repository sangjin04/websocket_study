const express = require('express');
const app = express();

const http = require('http')
const {Server} = require("socker.io");
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket)=>{
    console.log('socket', socket);

    socket.on('join', (options, callback)=>{ 
         
    })
    socket.on('sendMassage', () => { })
    socket.on('disconnect', () => { 
        console.log('socket disconnected', socket.id)
     })
})

const publicDirectoryPath = path.join(_dirname, '../public');
app.use(express.static(path.join(__dirname, '../public')))
const port = 4000;
app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`);
})