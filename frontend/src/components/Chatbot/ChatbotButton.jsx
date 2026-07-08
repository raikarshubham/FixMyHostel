import { useState } from "react";
import ChatbotWindow from "./ChatbotWindow";
import "./Chatbot.css";

const ChatbotButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {!open && (
        <div className="chatbot-launcher">
          {/* Greeting Bubble */}
          <div className="chatbot-greeting">
            Hi, I’m FixMyHostel Assistant 👋
          </div>

          {/* Chat Icon */}
          <button
            className="chatbot-button"
            onClick={() => setOpen(true)}
          >
            💬
          </button>
        </div>
      )}

      {open && <ChatbotWindow onClose={() => setOpen(false)} />}
    </>
  );
};

export default ChatbotButton;
