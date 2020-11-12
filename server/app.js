const express = require('express')
const app = express()
const http = require('http').createServer(app)
const cors = require('cors')
const PORT = process.env.PORT || 3000
const io = require('socket.io')(http)

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('user-connect', () => { 
        console.log('someone-connected test');
    }) 
})

http.listen(PORT, () => console.log(`listen localhost:${PORT}`))
