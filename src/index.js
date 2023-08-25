const realTimeServer = require('./realTimeServer')
const app = require('./app')

const port = 3000
const httpServer = app.listen(`${port}`, () => {
    console.log(`Server running at port ${port}`)
})

realTimeServer(httpServer)