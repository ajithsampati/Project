// Get the chat log and input elements
const chatLog = document.getElementById('chat-log');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');

// Create a WebSocket connection
const socket = new WebSocket('ws://localhost:8080');

// Handle WebSocket events
socket.onopen = () => {
    console.log('Connected to the WebSocket server');
};

socket.onmessage = (event) => {
    console.log(`Received message: ${event.data}`);
    // Append the received message to the chat log
    chatLog.innerHTML += `<p>${event.data}</p>`;
};

socket.onclose = () => {
    console.log('Disconnected from the WebSocket server');
};

socket.onerror = (event) => {
    console.log(`Error occurred: ${event}`);
};

// Send a message when the send button is clicked
sendBtn.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message !== '') {
        socket.send(message);
        messageInput.value = '';
    }
});

// Send a message when the enter key is pressed
messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendBtn.click();
    }
});