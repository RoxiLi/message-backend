const Model = require('./model');

//modelo con las funciones
function addUser(user) {
    const myUser = new Model(user);
    return myUser.save();
}

async function getUser(filterUsername) {
    let filter = {};
    if (filterUsername !== null) {
        filter = { name: filterUsername };
    }
    const user = await Model.find(filter);
    return user;

}
module.exports = {
    add: addUser,
    get: getUser,

}
