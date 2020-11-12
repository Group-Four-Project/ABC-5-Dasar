'use strict'

const cors = require('cors')
const express = require('express')
const app = express()
const port = 3000
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))

let onlineUser = []

io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('userLogin', (name) => {
    console.log(name, '<><><><><> ini name dari server')
    onlineUser.push(name)
    io.emit('login', onlineUser)
  })
})

http.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`)
})