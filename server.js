import {Server} from 'socket.io';
import express from 'express';

const app = express();


const appServer = app.listen(8080, ()=> console.log(`Server started on port 8080`));

const io = new Server(appServer, {cors: {origin: "*"}});


io.on('connection', socket=> {
    socket.on('message', message=> {
        console.log(message);
        io.emit('message', `${socket.id.substr(0,2)} said ${message}`);
    });
});