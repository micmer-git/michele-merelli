import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Bot, User } from 'lucide-react';
import { Card } from './Card';
import { streamGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

export const GeminiChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Alex's AI Assistant. Ask me anything about his work, stack, or availability!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setIsLoading(true);

    // Add user message
    const newHistory = [...messages, { role: 'user', text: userMsg } as ChatMessage];
    setMessages(newHistory);

    // Add placeholder for AI response
    setMessages(prev => [...prev, { role: 'model', text: '' }]);

    let fullResponse = "";
    
    await streamGeminiResponse(
      newHistory.filter(m => m.text !== ''), // Filter out any empty placeholders if any
      userMsg,
      (chunk) => {
        fullResponse += chunk;
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: 'model', text: fullResponse };
          return updated;
        });
      }
    );

    setIsLoading(false);
  };

  return (
    <Card className="h-full flex flex-col md:col-span-2 md:row-span-2 !p-0" noPadding>
      {/* Header */}
      <div className="p-4 border-b-2 border-gray-100 bg-brand-bg flex items-center gap-2">
        <div className="p-2 bg-brand-accent rounded-lg border-2 border-brand-dark shadow-neo-sm">
          <Sparkles size={18} className="text-brand-dark" />
        </div>
        <div>
          <h3 className="font-bold text-sm">Ask AI Alex</h3>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs text-gray-500">Gemini 2.5 Flash</span>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] max-h-[400px]">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`
              w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-brand-dark
              ${msg.role === 'model' ? 'bg-white' : 'bg-brand-dark text-white'}
            `}>
              {msg.role === 'model' ? <Bot size={16} /> : <User size={16} />}
            </div>
            <div className={`
              p-3 rounded-2xl max-w-[80%] text-sm border border-brand-dark
              ${msg.role === 'model' 
                ? 'bg-white rounded-tl-none shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]' 
                : 'bg-brand-accent rounded-tr-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'}
            `}>
              {msg.text || <span className="animate-pulse">...</span>}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t-2 border-gray-100">
        <form onSubmit={handleSubmit} className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about my projects..."
            className="w-full pl-4 pr-12 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-dark focus:outline-none focus:ring-0 transition-colors bg-gray-50 text-sm font-medium"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-2 p-1.5 bg-brand-dark text-white rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:hover:bg-brand-dark transition-colors"
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </Card>
  );
};