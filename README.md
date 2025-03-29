AI Chatbot with Llama 3 and Action-Based Capabilities
🚀 This is an AI-powered chatbot built using Flask, Llama 3 (via Ollama), and JavaScript, capable of normal conversation, weather updates, and agent-like behavior (e.g., booking tickets, controlling IoT devices).

🛠 Features
✅ Conversational AI – Uses Llama 3 for intelligent responses.
✅ Lightweight & Self-Hosted – No external API keys required.
✅ Agent-like Behavior – Extendable to book tickets, control IoT devices, etc.
✅ Web UI – Simple and interactive frontend.
✅ Weather API Integration – Fetch real-time weather updates.
✅ Custom Actions – Can be extended to perform tasks beyond chatting.

🖥️ Tech Stack
🔹 Backend: Flask, Ollama (Llama 3), Python
🔹 Frontend: HTML, JavaScript, Tailwind CSS
🔹 Database (Optional): SQLite (for storing conversations)

📂 Project Structure
csharp
Copy
Edit
📦 chatbot-ai
 ┣ 📂 public/         # Static files (CSS, JS, images)
 ┃ ┣ 📜 script.js     # Handles UI interaction & API calls
 ┃ ┣ 📜 styles.css    # Frontend styling
 ┣ 📂 views/          # HTML templates
 ┃ ┣ 📜 index.html    # Main UI for the chatbot
 ┣ 📜 app.py          # Flask backend (Chatbot API)
 ┣ 📜 requirements.txt # Python dependencies
 ┣ 📜 README.md       # Project documentation
🚀 Setup & Installation
1️⃣ Install Dependencies
bash
Copy
Edit
pip install -r requirements.txt
2️⃣ Run Ollama (Llama 3) Locally
Download and start Ollama with Llama 3:

bash
Copy
Edit
ollama pull llama3
3️⃣ Start the Flask Server
bash
Copy
Edit
python app.py
🟢 Runs on: http://127.0.0.1:8000

🛠 Usage
Open http://127.0.0.1:8000 in your browser.

Type a message, and the chatbot will respond using Llama 3.

The chatbot can be extended to book tickets, fetch weather, or control devices.

🔧 Future Enhancements
✅ Integrate real-time ticket booking APIs (IRCTC, Skyscanner, Ticketmaster)
✅ IoT control using MQTT or Webhooks
✅ Voice input support
✅ Deploy on a cloud platform (Render, Railway, Hugging Face Spaces)
