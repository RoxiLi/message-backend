const store = require('./store');
const { socket } = require('../../socket');

function addMessage(user, message){
    return new Promise((resolve, reject) =>{
       if(!user || !message){
           console.error('[messageController] No hay usuario o mensaje');
           reject('Los datos son incorrectos');
           return false;
       }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date()
        };
       store.add(fullMessage);
       //emite los mensajes
       socket.io.emit('message', fullMessage);
       resolve(fullMessage);
    });
}

function getMessages(filterUser) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
    });
}

function listMessagesByUser(userId) {
    return store.list(userId)
}

module.exports = {
    addMessage,
    getMessages,
    listMessagesByUser
}
