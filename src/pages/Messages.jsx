import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const conversations = [
  {
    id: 1,
    name: "Recruiter · Stripe",
    preview: "We’d love to move you to the next round.",
    time: "2h",
    unread: true,
  },
  {
    id: 2,
    name: "Hiring Manager · Notion",
    preview: "Can you share your portfolio link?",
    time: "1d",
    unread: false,
  },
];

const Messages = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(conversations[0]);
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col h-full">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Messages</h1>
          <p className="text-sm text-gray-400 mt-1">
            Stay in touch with recruiters.
          </p>
        </div>

        <button
          onClick={() => navigate("/app/dashboard")}
          className="px-5 py-2 border border-white/20 rounded-full text-sm hover:bg-white/10 transition"
        >
          ← Back
        </button>
      </div>

      {/* Chat Container */}
      <div className="flex flex-1 rounded-2xl border border-white/10 overflow-hidden">

        {/* Inbox */}
        <div className="w-[300px] bg-[#15151a] border-r border-white/10 flex flex-col">

          <div className="px-6 py-4 text-xs tracking-widest text-indigo-400 border-b border-white/10">
            INBOX
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {conversations.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setActive(chat)}
                className={`p-4 rounded-xl cursor-pointer transition ${
                  active.id === chat.id
                    ? "bg-indigo-500/20 border border-indigo-500/30"
                    : "hover:bg-white/5"
                }`}
              >
                <div className="flex justify-between text-sm font-medium">
                  <span>{chat.name}</span>
                  <span className="text-xs text-gray-400">
                    {chat.time}
                  </span>
                </div>

                <p className="text-xs text-gray-400 mt-2 truncate">
                  {chat.preview}
                </p>

                {chat.unread && (
                  <div className="h-2 w-2 bg-emerald-400 rounded-full mt-3" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Conversation */}
        <div className="flex flex-1 flex-col bg-[#101014]">

          <div className="px-6 py-4 border-b border-white/10 font-semibold">
            {active.name}
          </div>

          <div className="flex-1 overflow-y-auto px-8 py-8 space-y-6">

            <div className="max-w-xs bg-white/10 px-4 py-2 rounded-2xl text-sm">
              Hi Alex, thanks for applying!
            </div>

            <div className="max-w-xs ml-auto bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 rounded-2xl text-sm">
              Thank you! Looking forward to next steps.
            </div>

          </div>

          <div className="border-t border-white/10 px-6 py-4 bg-[#15151a]">
            <div className="flex gap-4">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-transparent border border-white/20 rounded-full px-5 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
              />

              <button
                onClick={() => setText("")}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-sm font-medium"
              >
                Send
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Messages;