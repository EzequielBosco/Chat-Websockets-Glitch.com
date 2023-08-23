const realTimeServer = require('./realTimeServer')
const app = require('./app')
// const {Server} = require('socket.io')

const port = 3000
const httpServer = app.listen(`${port}`, () => {
    console.log(`Server running at port ${port}`)
})

realTimeServer(httpServer)

// socketServer.on('connection', socket => {
//     socket.on('message', payload => {
//         console.log(payload, socket.id)
//     })
// })