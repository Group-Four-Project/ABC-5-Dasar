const express = require('express')
const app = express()
const http = require('http').createServer(app)
const cors = require('cors')
const PORT = process.env.PORT || 3000
const io = require('socket.io')(http)

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.urlencoded({extended : true}))

let onlineUsers = []
let messages = []

io.on('connection', (socket) => {
    console.log('a user connected');

  socket.on('userLogin', (name) => {
    console.log(name, '<><><><><> ini name dari server')
    onlineUsers.push(name)
    io.emit('userLogin', onlineUsers)  // login untuk semua
  })

  socket.on('sendMessage', (message) => {
    messages.push(message)
    console.log(messages);
    io.emit('sendMessage', message)
  })
})

http.listen(PORT, () => console.log(`listen localhost:${PORT}`))
