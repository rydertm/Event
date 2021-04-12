const { EventEmitter } = require('events')
const ev = new EventEmitter()

// o once so vai emitir uma unica vez
ev.once('saySomething', (message) => {
    console.log('Eu ouvi você:', message)
})

ev.emit('saySomething', 'Henrique')
ev.emit('saySomething', 'Camila')
ev.emit('saySomething', 'Daniel')