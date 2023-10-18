const users = [];

const addUser = ({ id, username, room }) => {
    if (!username || !room) {
        return {
            error: '사용자 이름과 방이 필요합니다.'
        };
    }

    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = users.find((user) => {
        return user.room === room && user.username === username;
    });

    if (existingUser) {
        return {
            error: '사용자 이름이 사용중입니다'
        };
    }

    const user = { id, username, room };
    users.push(user);
    return { user };
};
const getUserInRoom = (room) => {
    room = room.trim();

    return users.filter(user => user.room ===  room);
}

module.exports = {
    addUser,
    getUserInRoom
};
