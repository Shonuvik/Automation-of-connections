const server = require('http').createServer();
const io = require('socket.io')(server);

io.on('connection', socket => {
    //gerando o código dinamicamente
    const code = `${Math.floor(Math.random()  * 999999)}`.padStart(6, '0');
    
    //avisando o client 
    socket.emit('code', code);
    socket.emit('status', 'waiting_call');
});

server.listen(3001, ()=>{
   
});