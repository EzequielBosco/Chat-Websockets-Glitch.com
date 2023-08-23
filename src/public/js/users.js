socket = io()

// const user = {
//     name: 'Guest'
// }

// socket.emit('message', user)

const chatBox = document.getElementById('chat-box')

const chat = async (chatBox) => {
    const swal = await Swal.fire({
        title: "Inicio se sesión",
        input: "text",
        text: "ingresa tu usuario",
        inputValidator: value => {
            return !value && "Necesitas ingresar un usuario"
        },
        allowOutsideClick: false
    })
    
    const user = swal.value

    socket.emit('auth', user)

    chatBox.addEventListener('keyup', e => {
        if(e.key === 'Enter') {
            if (chatBox.value.trim().length > 0) {
                socket.emit('message', {user, message: chatBox.value})
                chatBox.value = ''
            }
        }
    })

    socket.on('messageLogs', data => {
        const log = document.getElementById('message-logs')
        let messages = ''
        data.forEach(message => {
            const user = message.user.charAt(0).toUpperCase() + message.user.slice(1)
            messages += `${user} dice: ${message.message}<br>`
        }
        )

        log.innerHTML = messages
    })

    socket.on('newUser', data => {
        Swal.fire({
            text: `${data} se conectó`,
            toast: true,
            position: 'top-right',
            timer: 3000,
            showConfirmButton:false,
            timerProgressBar: true
        })
    })
}

chat(chatBox)

// Swal.fire({
//     title: "Welcome to the chat!",
//     input: "text",
//     text: "ingresa tu usuario",
//     icon: "success"
// })