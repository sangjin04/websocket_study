const socket = io();

const query = new URLSearchParams(location.search);
const username = query.get('username');
const room = query.get('room');
console.log(socket);

socket.emit('join', {username, room}, (error) => {
    if(error) {
        alert(error);
        location.href = '/'; 
    }
});

const sidebarTemplate = document.querySelector('#sidebar-template').innerHTML;

socket.on('roomData', ({room, users}) => {
    const html = Mustache.render(sidebarTemplate, {
        room,
        users
    })

    document.querySelector('#sidebar').innerHTML = html;

})
const messageTemplate = document.querySelector('#message-template').innerHTML;
socket.on('message', (message) => {
    const html = Mustach.render(messageTemplate, {
        username:MediaKeyMessageEvent.username,
        message:message.text,
        createdAt:message.createdAt
    })
    message.insertAdjacentHTML('beforeend', html);
    scrollToBottom();
})


socket.on('message')
