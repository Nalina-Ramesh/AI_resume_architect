import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Hi! I’m your CareerForge AI assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { role: 'user', text: input },
      { role: 'ai', text: 'This is a demo AI response.' }
    ];

    setMessages(newMessages);
    setInput('');
  };

  return (
    <div className="flex flex-col h-full">

      <div className="mb-6">
        <h1 className="text-2xl font-semibold">AI Chatbot</h1>
        <p className="text-sm text-gray-400 mt-1">
          Ask anything about resumes, ATS, or job applications.
        </p>
      </div>

      <div className="flex flex-1 flex-col rounded-2xl border border-white/10 bg-[#111116] overflow-hidden">

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-md px-4 py-2 rounded-2xl text-sm ${
                msg.role === 'user'
                  ? 'ml-auto bg-gradient-to-r from-indigo-500 to-purple-600'
                  : 'bg-white/10'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="border-t border-white/10 p-6 bg-[#14141a] flex gap-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask the AI..."
            className="flex-1 bg-transparent border border-white/20 rounded-full px-5 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
          />

          <button
            onClick={sendMessage}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-sm font-medium"
          >
            Send
          </button>
        </div>

      </div>
    </div>
  );
};

export default Chatbot;