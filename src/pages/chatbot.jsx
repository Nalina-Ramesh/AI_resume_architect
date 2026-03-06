import React, { useEffect, useMemo, useRef, useState } from 'react';
import API from '../api/api';

const nowTime = () =>
  new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

const initialConversations = [
  {
    id: 1,
    title: 'New conversation',
    updatedAt: `Today · ${nowTime()}`,
    messages: [
      {
        id: 1,
        role: 'ai',
        text: 'Hi! I’m your CareerForge AI assistant. Ask me to improve ATS score, rewrite bullets, or tailor your resume to a job description.',
        time: nowTime(),
      },
    ],
  },
];

const Chatbot = () => {
  const [conversations, setConversations] = useState(initialConversations);
  const [activeConversationId, setActiveConversationId] = useState(initialConversations[0].id);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const messageEndRef = useRef(null);

  const activeConversation = useMemo(
    () => conversations.find((conversation) => conversation.id === activeConversationId),
    [conversations, activeConversationId]
  );

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeConversation?.messages.length, isTyping]);

  const updateConversation = (conversationId, updater) => {
    setConversations((prev) =>
      prev.map((conversation) =>
        conversation.id === conversationId ? updater(conversation) : conversation
      )
    );
  };

  const handleNewChat = () => {
    const newChatId = Date.now();
    const freshConversation = {
      id: newChatId,
      title: 'New conversation',
      updatedAt: `Today · ${nowTime()}`,
      messages: [
        {
          id: 1,
          role: 'ai',
          text: 'New chat started. Tell me the role you are targeting and I’ll optimize your resume for it.',
          time: nowTime(),
        },
      ],
    };

    setConversations((prev) => [freshConversation, ...prev]);
    setActiveConversationId(newChatId);
    setInput('');
    setIsTyping(false);
  };

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || !activeConversation || isTyping) return;

    const userMessage = {
      id: Date.now(),
      role: 'user',
      text: trimmed,
      time: nowTime(),
    };

    updateConversation(activeConversation.id, (conversation) => {
      const nextTitle =
        conversation.title === 'New conversation'
          ? trimmed.slice(0, 36)
          : conversation.title;

      return {
        ...conversation,
        title: nextTitle,
        updatedAt: `Today · ${nowTime()}`,
        messages: [...conversation.messages, userMessage],
      };
    });

    setInput('');
    setIsTyping(true);

    try {
      const response = await API.post('/chat', {
        message: trimmed,
        history: activeConversation.messages,
      });

      const aiMessage = {
        id: Date.now() + 1,
        role: 'ai',
        text:
          response?.data?.reply ||
          'I could not generate a response right now. Please try again.',
        time: nowTime(),
      };

      updateConversation(activeConversation.id, (conversation) => ({
        ...conversation,
        updatedAt: `Today · ${nowTime()}`,
        messages: [...conversation.messages, aiMessage],
      }));
    } catch {
      const fallback = {
        id: Date.now() + 1,
        role: 'ai',
        text: 'Service is temporarily unavailable. Please try again in a moment.',
        time: nowTime(),
      };

      updateConversation(activeConversation.id, (conversation) => ({
        ...conversation,
        updatedAt: `Today · ${nowTime()}`,
        messages: [...conversation.messages, fallback],
      }));
    } finally {
      setIsTyping(false);
    }
  };

  const handleCopy = (messageText) => {
    navigator.clipboard?.writeText(messageText);
  };

  const handleRegenerate = () => {
    if (!activeConversation) return;

    const regenerated = {
      id: Date.now(),
      role: 'ai',
      text: 'Alternative version: start bullets with strong verbs, add measurable outcomes, and align your skills section with ATS-relevant terms from the target role.',
      time: nowTime(),
    };

    updateConversation(activeConversation.id, (conversation) => ({
      ...conversation,
      updatedAt: `Today · ${nowTime()}`,
      messages: [...conversation.messages, regenerated],
    }));
  };

  return (
    <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[#0f0f13] text-white">
      <div className="pointer-events-none absolute -top-16 -left-20 h-56 w-56 rounded-full bg-indigo-600/20 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-purple-600/20 blur-[140px]" />

      <div className="relative grid h-full grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)]">
        {/* Left sidebar */}
        <aside className="border-r border-white/10 bg-white/5 backdrop-blur-xl p-5">
          <button
            onClick={handleNewChat}
            className="w-full rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-3 text-sm font-medium shadow-lg transition hover:scale-[1.01]"
          >
            + New chat
          </button>

          <div className="mt-6 flex items-center justify-between">
            <h2 className="text-xs uppercase tracking-[0.22em] text-gray-400">Recent chats</h2>
            <span className="text-[11px] text-gray-500">{conversations.length}</span>
          </div>

          <div className="mt-3 max-h-[calc(100vh-300px)] space-y-2 overflow-y-auto pr-1 scrollbar-thin">
            {conversations.map((conversation) => {
              const isActive = conversation.id === activeConversationId;
              return (
                <button
                  key={conversation.id}
                  onClick={() => setActiveConversationId(conversation.id)}
                  className={`w-full rounded-2xl border px-3 py-3 text-left transition ${
                    isActive
                      ? 'border-indigo-400/40 bg-indigo-500/15'
                      : 'border-white/10 bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <p className="truncate text-sm font-medium text-white">{conversation.title}</p>
                  <p className="mt-1 text-xs text-gray-400">{conversation.updatedAt}</p>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Right main chat area */}
        <section className="flex h-full flex-col bg-gradient-to-b from-[#141428]/60 to-[#0f0f13]/80">
          <header className="border-b border-white/10 px-6 py-4 backdrop-blur-xl">
            <h1 className="text-lg font-semibold">AI Assistant</h1>
            <p className="mt-1 text-xs text-gray-400">
              Smart resume optimization, ATS improvement, and application strategy.
            </p>
          </header>

          <div className="flex-1 overflow-y-auto px-6 py-6 scrollbar-thin">
            <div className="mx-auto max-w-4xl space-y-5">
              {activeConversation?.messages.map((message) => (
                <div
                  key={message.id}
                  className={`group flex items-start gap-3 ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.role === 'ai' && (
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-semibold">
                      AI
                    </div>
                  )}

                  <div className="max-w-[75%]">
                    <div
                      className={`rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-lg transition group-hover:scale-[1.01] ${
                        message.role === 'user'
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
                          : 'border border-white/10 bg-white/5 backdrop-blur-xl text-gray-100'
                      }`}
                    >
                      {message.text}
                    </div>

                    <div
                      className={`mt-1 flex items-center gap-2 text-[11px] text-gray-400 ${
                        message.role === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <span>{message.time}</span>
                      {message.role === 'ai' && (
                        <>
                          <button
                            onClick={() => handleCopy(message.text)}
                            className="opacity-0 transition hover:text-white group-hover:opacity-100"
                          >
                            Copy
                          </button>
                          <button
                            onClick={handleRegenerate}
                            className="opacity-0 transition hover:text-white group-hover:opacity-100"
                          >
                            Regenerate
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  {message.role === 'user' && (
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-xs font-semibold">
                      You
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-semibold">
                    AI
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-gray-300 [animation-delay:-0.2s]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-gray-300 [animation-delay:-0.1s]" />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-gray-300" />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messageEndRef} />
            </div>
          </div>

          <footer className="border-t border-white/10 p-4 backdrop-blur-xl">
            <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-3 shadow-2xl">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="h-10 w-10 rounded-full border border-white/15 bg-white/5 text-gray-300 transition hover:bg-white/10"
                >
                  🎙️
                </button>

                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => event.key === 'Enter' && handleSend()}
                  placeholder="Ask CareerForge AI anything..."
                  className="h-11 flex-1 rounded-full border border-white/15 bg-[#0f0f13]/80 px-4 text-sm text-white outline-none transition focus:border-indigo-400/50"
                />

                <button
                  onClick={handleSend}
                  className="h-11 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-5 text-sm font-semibold shadow-lg transition hover:scale-[1.02]"
                >
                  Send
                </button>
              </div>
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
};

export default Chatbot;
