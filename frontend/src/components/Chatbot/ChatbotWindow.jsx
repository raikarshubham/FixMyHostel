import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatMessage from "./ChatMessage";
import { getBotReply } from "./chatbotLogic";
import api from "../../api/axios";
import "./Chatbot.css";

const ChatbotWindow = ({ onClose }) => {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋 I'm FixMyHostel Assistant." },
    { sender: "bot", text: "I can help you with your complaints." },
  ]);

  const [input, setInput] = useState("");
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    api
      .get("/complaints/my")
      .then((res) => setComplaints(res.data.complaints || []))
      .catch(() => {});
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    const reply = await getBotReply(input, complaints);
    const botMsg = { sender: "bot", text: reply };

    setMessages((prev) => [...prev, botMsg]);
    setInput("");
  };

  return (
    <div className="chatbot-window">
      <div className="chatbot-header">
        <span>FixMyHostel Assistant</span>
        <button onClick={onClose}>✕</button>
      </div>

      <div className="chatbot-body">
        {messages.map((m, i) => (
          <ChatMessage key={i} sender={m.sender} text={m.text} />
        ))}
      </div>

      {/* 🔥 QUICK ACTION BUTTONS */}
      <div className="chatbot-actions">
        <button onClick={() => navigate("/student/raise-complaint")}>
          📝 Raise Complaint
        </button>

        <button onClick={() => navigate("/student/complaints")}>
          📂 My Complaints
        </button>

        <button onClick={() => navigate("/student/feedback")}>
          ⭐ Give Feedback
        </button>
      </div>

      <div className="chatbot-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about your complaint..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatbotWindow;
