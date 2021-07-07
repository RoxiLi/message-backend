const Model = require('./model');

function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}
async function getMessages(filterUser) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if (filterUser !== null) {
            filter = { user: RegExp(filterUser, "i") };
        }
        Model.find(filter)
            .populate('user')
            .exec((error, populated) => {
                if(error){
                    reject(error);
                    return false;
                }
                resolve(populated);
            });
    })

}
function getMessagesByUser(userId) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if (userId) {
            filter = { user: userId };
        }
        Model.find(filter)
            .populate('user')
            .exec((error, populated) => {
                if(error){
                    reject(error);
                    return false;
                }
                resolve(populated);
            });
    })

}

module.exports = {
    add: addMessage,
    //list: getMessages,
    list: getMessagesByUser
    //get
    //update
    //delete
}
