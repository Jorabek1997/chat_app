const users = [];


const addUser = ({ id, name, room }) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existsUser = users.find((user) => user.name === name && user.room === room);

    if(existsUser) return { error: 'Username is taken!' }

    const user = { id, name, room };
    users.push(user);

    return { user };
}


const removeUser = ( id ) => {
    const idx = users.findIndex(user => user.id === id);

    if(idx !== -1){
        return users.splice(idx, 1)[0]
    }

}

const getUser = ( id ) => users.find(u => u.id === id);


const getUsersInRoom = ( room ) => users.filter((user) => user.room === room); 

module.exports = { addUser, removeUser, getUser, getUsersInRoom };