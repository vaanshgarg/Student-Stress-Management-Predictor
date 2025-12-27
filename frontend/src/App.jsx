import { useEffect, useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import engineerMeme from "./assets/cat_meme.png";
import  meme from "./assets/data_engineer_meme.png"; // <-- NEW MEME

const API = "http://127.0.0.1:5000";

export default function App() {
  const [questions, setQuestions] = useState({});
  const [formData, setFormData] = useState({});
  const [result, setResult] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(API + "/options")
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch(() => setQuestions(null));
  }, []);

  const getEmoji = (question) => {
    const q = question.toLowerCase();
    if (q.includes("sleep")) return "😴";
    if (q.includes("study")) return "📘";
    if (q.includes("screen")) return "🖥️";
    if (q.includes("exercise")) return "💪";
    if (q.includes("gender")) return "⚧️";
    if (q.includes("year")) return "🎓";
    if (q.includes("campus")) return "🏠";
    if (q.includes("overwhelmed")) return "🥵";
    return "📝";
  };

  const handleChange = (key, value) => {
    setFormData((p) => ({ ...p, [key]: value }));
  };

  const predict = async () => {
    const res = await fetch(API + "/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    setResult(data.result);
    setShowModal(true);
  };

  const refresh = () => {
    setFormData({});
    setResult("");
    setShowModal(false);
  };

  const answered = Object.keys(formData).filter((k) => formData[k]).length;
  const total = Object.keys(questions).length;
  const progress = total ? Math.round((answered / total) * 100) : 0;

  const getResultColorClass = () => {
    const r = result.toLowerCase();
    if (r.includes("low")) return "modal-box low";
    if (r.includes("moderate")) return "modal-box moderate";
    if (r.includes("high")) return "modal-box high";
    return "modal-box";
  };

  return (
    <div className="side-layout">
      
      {/* LEFT meme */}
      <div className="left-side-image">
        <img src={engineerMeme} alt="engineer meme" className="meme-img"/>
      </div>

      {/* CENTER FORM */}
      <div className="main-container">
        <div className="glass-card">
          <img src={logo} alt="logo" className="logo" />
          <h1 className="title">📊 Student Stress Survey</h1>
          <p className="subtitle">Track your stress levels with simple questions</p>

          {questions ? (
            <>
              <div className="progress-container">
                <div className="progress" style={{ width: `${progress}%` }}></div>
              </div>

              <p className="progress-text">Step {answered} of {total}</p>

              {Object.keys(questions).map((q) => (
                <div key={q} className="dropdown-field">
                  <label className="dropdown-label">{getEmoji(q)} {q}</label>
                  <select
                    className="dropdown"
                    value={formData[q] || ""}
                    onChange={(e) => handleChange(q, e.target.value)}
                  >
                    <option value="">-- Select --</option>
                    {questions[q].map((v) => (
                      <option key={v}>{v}</option>
                    ))}
                  </select>
                </div>
              ))}
            </>
          ) : (
            <p className="error">❌ Backend not running — Start Flask app!</p>
          )}

          <div className="btn-group">
            <button className="btn predict" onClick={predict} disabled={answered !== total}>
              🚀 Predict Stress
            </button>
            <button className="btn refresh" onClick={refresh}>
              🔄 Refresh
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT meme */}
      <div className="right-side-image">
        <img src={meme} alt="cat meme" className="meme-img" />
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className={getResultColorClass()}>
            <h2>🎯 Your Stress Level</h2>
            <p className="result-text">{result}</p>
            <button className="btn close" onClick={() => setShowModal(false)}>
              ✖ Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
