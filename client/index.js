new WebSocket('ws://localhost:7071/ws');

ws.onmessage = (webSocketMessage) => {
    console.log(webSocketMessage)
    console.log(webSocketMessage.data);
}

document.body.onmousemove = (event) => {
    const messageBody = {
        x:event.clientX,
        Y:event.clientY
    }
    ws.send(JSON.stringify(messageBody));
}