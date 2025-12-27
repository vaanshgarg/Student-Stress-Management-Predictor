from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
import pickle
from sklearn.preprocessing import LabelEncoder

MODEL_PATH = "stress_model.pkl"
CSV_PATH = "Student Lifestyle & Well-being Survey (Responses) - Form Responses 1 (1).csv"

model = pickle.load(open(MODEL_PATH, "rb"))
df = pd.read_csv(CSV_PATH)

df = df.loc[:, ~df.columns.str.contains("^Unnamed")]
df = df.dropna(thresh=len(df) * 0.5, axis=1)

for col in df.columns:
    mode_values = df[col].mode(dropna=True)
    if not mode_values.empty:
        df[col] = df[col].fillna(mode_values.iat[0])

label_encoders = {}
for col in df.columns:
    le = LabelEncoder()
    df[col] = le.fit_transform(df[col].astype(str))
    label_encoders[col] = le

FEATURES = [
    "What is your gender identity?",
    "Which year of study are you currently in?",
    "Do you live on-campus (e.g., dormitory/hostel)?",
    "On a typical weekday, how many hours do you spend on academic study (classes, homework, studying)?",
    "I feel overwhelmed by my academic workload."
]

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Backend running!"

@app.route("/options")
def options():
    feature_values = {}
    for f in FEATURES:
        feature_values[f] = list(label_encoders[f].classes_)
    return jsonify(feature_values)

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    encoded_values = []

    try:
        for f in FEATURES:
            text_val = data[f]
            encoded = label_encoders[f].transform([text_val])[0]
            encoded_values.append(encoded)
    except Exception as e:
        return jsonify({"error": str(e), "message": "Input mismatch"}), 400

    x = np.array(encoded_values).reshape(1, -1)
    pred = model.predict(x)[0]
    # Convert numpy values to Python types
    py_pred = int(pred)
    py_encoded = [int(v) for v in encoded_values]

    return jsonify({
        "encoded_input": py_encoded,
        "prediction": py_pred,
        "result": "Manages Stress Well 🟢" if py_pred == 1 else "Struggles with Stress 🔴"
    })


if __name__ == "__main__":
    app.run(debug=True)
