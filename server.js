const express = require('express')

const {Server : IOServer} = require('socket.io')
const {Server : HttpServer} = require('http')

const {v4 : uuid} = require('uuid')

const notes = []

const app = express()
const server = new HttpServer(app)
const io = new IOServer(server)

app.use(express.static(__dirname + '/public'))


const PORT = 8080

io.on('connection', (socket)=>{
    console.log('new connection', socket.id)
socket.emit('server:loadnotes', notes)
    socket.on('client:newnote', data =>{
        const note = {
            title: data.title,
            description: data.description,
            id: uuid()
        }
        console.log(note)
        notes.push(note)
        socket.emit('server:newnote', note)
    })

})

server.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`)
});