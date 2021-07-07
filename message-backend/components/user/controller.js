const store = require('./store');

function addUser(name) {
    if(!name) {
        return Promise.reject('Invalid name');
    }
    const user = {
        name,
    };
    return store.add(user);
}
function getUser(filterUsername) {
    return new Promise((resolve, reject) => {
        resolve(store.get(filterUsername));
    });
}
module.exports = {
    addUser,
    getUser,
}
