const ChatMessage = ({ sender, text }) => {
  return (
    <div className={`chat-message ${sender}`}>
      {text}
    </div>
  );
};

export default ChatMessage;
