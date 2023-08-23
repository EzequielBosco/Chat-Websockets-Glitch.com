const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    res.render('users')
    // const users = [
    //     {name: "carolina", role: "user"},
    //     {name: "maria", role: "user"},
    //     {name: "carlitos", role: "admin"}
    // ]

    // const user = users[Math.floor(Math.random() * users.length)]
    // res.json({ message : 'hello' }) 
    }
)

module.exports = router