from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

# Allow requests from your frontend explicitly
CORS(app, resources={r"/*": {"origins": "http://192.168.100.234:5173"}})

@app.route('/check', methods=['POST'])
def check_output():
    data = request.get_json()
    input_text = data.get("input", "")
    output_text = data.get("output", "")

    if output_text.lower() in input_text.lower():
        result = "✅ The output seems to be related to the input."
    else:
        result = "⚠️ The output does not seem directly related to the input."

    return jsonify({"result": result})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)
