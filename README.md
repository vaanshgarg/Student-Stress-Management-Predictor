🧠 Student Stress Management Predictor

A full-stack Machine Learning + Vite + React project that predicts a student's stress level based on daily routines such as sleep hours, study hours, screen time, and exercise time.
The project features a modern glass-morphism UI, clean form inputs, and connects to a Python backend for prediction.

🚀 Features
Feature	Description
🎯 Stress prediction	ML model predicts stress based on user lifestyle choices
💎 Glassmorphism UI	Modern and aesthetic user interface without Tailwind
⚛️ Vite + React frontend	Fast & modular frontend with custom CSS
🐍 Flask backend	REST API for ML model prediction
🔌 Interactive form	Takes user input and returns stress level
🎨 Icons & gradients	UI similar to modern dashboard applications
📸 UI Preview

Sample Interface

<img src="https://user-images.githubusercontent.com/XXXX/mockup-ui.jpg" width="750"/>

(Replace the link above with your own screenshot later)

📂 Project Structure
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

⚙️ Installation & Setup
🔧 Backend (Flask + ML)
cd backend
pip install -r requirements.txt
python app.py


Backend runs on:

http://127.0.0.1:5000

🎨 Frontend (Vite + React)
cd stress-ui
npm install
npm run dev


Frontend runs on:

http://localhost:5173

🔗 API Endpoints
Method	Endpoint	Description
GET	/options	Returns available questions/choices
POST	/predict	Returns stress prediction result

Example Predict Payload

{
  "Sleep Hours": "5",
  "Study Hours": "3",
  "Screen Time (hrs)": "6",
  "Exercise (hrs)": "1"
}

🛠 Tech Stack
Category	Technology
Frontend	React, Vite, CSS
Backend	Python, Flask
ML	sklearn / logistics regression / pickled model
UI Design	Glassmorphism, gradients, icons
🌟 Future Improvements

 Color-coded stress result (Low / Medium / High)

 Loading animation during prediction

 Dark/Light theme toggle

 Authentication and session tracking

 Deploy to Netlify + Render

🤝 Contributing

Pull requests are welcome!
If you want to improve design, ML model accuracy, or features — feel free to fork and contribute.

🧑‍💻 Author

Vansh Garg
Student | Data Science Enthusiast
✨ Contributions, Mentorship & Collaboration welcome!

⭐ Show Support

If this project helped you or looks interesting —
leave a star ⭐ on the repo!
