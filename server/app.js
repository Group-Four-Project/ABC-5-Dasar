const express = require('express')
const app = express()
const http = require('http').createServer(app)
const cors = require('cors')
const PORT = process.env.PORT || 3000
const io = require('socket.io')(http)

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


let onlineUser = []
let messages = []

let onlineUsers = []
let messages = []
let letter = ''
io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('userLogin', (name) => {
    console.log(name, '<><><><><> ini name dari server')
    onlineUsers.push(name)
    io.emit('userLogin', onlineUsers)
  })

  socket.on('sendMessage', (message) => {

    messages.push(message.message)
    io.emit('sendMessage', messages)

  })

  socket.on('showHistory', () => {
    io.emit('showHistory', messages)
  })

  socket.on('showLetter', (data) => {
    letter = data
    console.log(letter);
    io.emit("showLetter", letter)
  })

  socket.on('gameOver', () => {
    onlineUsers = [],
      messages = [],
      letter = ''
    io.emit('gameOver')
  })

})

http.listen(PORT, () => console.log(`listen localhost:${PORT}`))
