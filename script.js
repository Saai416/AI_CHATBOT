document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("#user-input");
    const sendButton = document.querySelector("#send-button");
    const chatBox = document.querySelector("#chat-box");

    sendButton.addEventListener("click", sendMessage);
    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") sendMessage();
    });

    async function sendMessage() {
        const message = input.value.trim();
        if (!message) return;

        displayMessage("You: " + message, "text-green-500");
        input.value = ""; 

        try {
            const response = await fetch("/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: message }),
            });

            if (!response.ok) {
                throw new Error(`Server Error: ${response.status}`);
            }

            const data = await response.json();
            console.log("Response from server:", data); // Debugging

            // Ensure correct JSON response handling
            if (data.response) {
                displayMessage("Bot: " + data.response, "text-white bg-gray-600");
            } else {
                displayMessage("Bot: No response received", "text-red-500");
            }
        } catch (error) {
            console.error("Error:", error);
            displayMessage("Bot: Error communicating with server.", "text-red-500");
        }
    }

    function displayMessage(text, cssClass) {
        const messageElement = document.createElement("div");
        messageElement.textContent = text;
        messageElement.classList.add(...cssClass.split(" "), "p-2", "rounded-md", "mt-2");
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
