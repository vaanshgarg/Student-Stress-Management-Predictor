# 🧠 Student Stress Management Predictor

A full-stack **Machine Learning + Vite + React** project that predicts a student's stress level based on daily routines such as sleep hours, study hours, screen time, and exercise time.

The project features a **modern glass-morphism UI**, clean form inputs, and connects to a **Python backend** for prediction.

---

## 🚀 Features

| Feature | Description |
|---------|-------------|
| 🎯 Stress prediction | ML model predicts stress based on user lifestyle choices |
| 💎 Glassmorphism UI | Modern and aesthetic user interface without Tailwind |
| ⚛️ Vite + React frontend | Fast & modular frontend with custom CSS |
| 🐍 Flask backend | REST API for ML model prediction |
| 🔌 Interactive form | Takes user input and returns stress level |
| 🎨 Icons & gradients | UI similar to modern dashboard applications |

---

## 📸 UI Preview

> <img width="1625" height="923" alt="image" src="https://github.com/user-attachments/assets/459daf73-0712-43c7-bbda-2362ac27dbee" />



---

## 📂 Project Structure

```bash
student-stress-predictor/
│
├── backend/
│   ├── app.py
│   ├── model.pkl
│   └── requirements.txt
│
├── stress-ui/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── logo.png
│   ├── index.html
│   └── package.json
│
└── README.md

## ⚙️ Installation & Setup

### 🔧 Backend (Flask + ML)

```bash
cd backend
pip install -r requirements.txt
python app.py

Backend runs at:

http://127.0.0.1:5000


🎨 Frontend (Vite + React)
cd stress-ui
npm install
npm run dev


Frontend runs at:

http://localhost:5173



| Category | Technology                      |
| -------- | ------------------------------- |
| Frontend | React, Vite, CSS                |
| Backend  | Python, Flask                   |
| ML       | scikit-learn, pickled model     |
| UI       | Glassmorphism, gradients, icons |
