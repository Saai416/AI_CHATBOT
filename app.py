from flask import Flask, request, jsonify, send_from_directory
import ollama 
import os

app = Flask(__name__,static_folder="public")

@app.route('/public/<path:filename>')
def serve_public_files(filename):
    return send_from_directory("public", filename)  


@app.route("/")
def serve_index():
    return send_from_directory("views", "index.html")  # Ensure the correct path

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_message = data.get("message", "")

    print(f"Received message: {user_message}")

    try:
        response = ollama.chat(model="llama3.2", messages=[{"role": "user", "content": user_message}])
        
        # Ensure correct response extraction
        bot_reply = response.get("message", {}).get("content", "No response from bot")

        print(f"Response from Ollama: {bot_reply}")
        return jsonify({"response": bot_reply})  # JSON response

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"response": "Error processing request"}), 500
@app.route('/favicon.ico')
def favicon():
    return jsonify({"message": "Not Found"}), 404

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8000, debug=True)
