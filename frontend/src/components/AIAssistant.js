// React.js Code for AI-Powered Question Page with Gemini 1.5 Flash
import React, { useState } from "react";
import axios from "axios";
import "./AIAssistant.css";
import { FaPaperPlane } from "react-icons/fa";

const API_KEY = "AIzaSyDB69K-g5WujALQHskEowePNn6qc1vVPzA"; // Replace with your actual API key
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

const AIAssistant = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: "User", text: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const aiResponse = await getAIResponse(input);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "AI", text: aiResponse },
      ]);
    } catch (error) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "AI", text: "Sorry, an error occurred." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getAIResponse = async (question) => {
    try {
      const response = await axios.post(API_URL, {
        contents: [{ parts: [{ text: question }] }],
      });

      return (
        response.data.candidates[0]?.content?.parts[0]?.text ||
        "No response from AI."
      );
    } catch (error) {
      console.error("Error fetching AI response:", error);
      return "Error connecting to AI.";
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-container2">
        <h2 className="chat-title">Cyber Insurance AI Assistant</h2>
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender.toLowerCase()}`}>
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
          ))}
          {loading && <div className="message ai">AI is typing...</div>}
        </div>
        <form className="chat-form" onSubmit={handleSendMessage}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask your cyber insurance question..."
          />
          <button type="submit" disabled={loading}>
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIAssistant;
