// Safety Measures Modal
const modal = document.getElementById("safety-modal");
const safetyButton = document.getElementById("safety-button");
const closeModal = document.getElementById("close-modal");

// Open the modal when safety button is clicked
safetyButton.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Close the modal when the close button is clicked
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close the modal when clicking outside the modal content
window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// Chatbox Toggle
const chatButton = document.getElementById("chatbot-button");
const chatbox = document.getElementById("chatbox");
const sendButton = document.getElementById("send-button");
const chatInput = document.getElementById("chat-input");
const chatBody = document.querySelector(".chat-body");

// Open/Close chatbox when chat button is clicked
chatButton.addEventListener("click", () => {
    chatbox.style.display = chatbox.style.display === "flex" || chatbox.style.display === "block" ? "none" : "block";
});

// Send message when send button is clicked
sendButton.addEventListener("click", () => {
    const message = chatInput.value.trim();
    if (message !== "") {
        const userMessage = document.createElement("p");
        userMessage.classList.add("chat-message", "user");
        userMessage.textContent = message;
        chatBody.appendChild(userMessage);
        chatInput.value = "";
        chatBody.scrollTop = chatBody.scrollHeight;

        // Simulate bot response
        setTimeout(() => {
            const botMessage = document.createElement("p");
            botMessage.classList.add("chat-message", "bot");
            botMessage.textContent = "Thank you for your message. We will get back to you shortly.";
            chatBody.appendChild(botMessage);
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000);
    }
});

// Optional: Send message on Enter key press
chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        sendButton.click();
    }
});
