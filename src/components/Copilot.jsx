import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, X, ShieldAlert, Zap, Clock } from 'lucide-react';

export default function Copilot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'Shelton AI Knowledge Copilot online. I am trained on decades of grid-infrastructure deployment and safety data. How can I assist your scope?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text) => {
    if (!text.trim()) return;
    
    // Add user message
    const userMsg = { id: Date.now(), sender: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Mock AI Logic
    setTimeout(() => {
      let responseText = "I will escalate this specific operational request to our senior estimating team. We have 140+ crews ready for dispatch.";
      
      const lowerText = text.toLowerCase();
      if (lowerText.includes('safety') || lowerText.includes('record')) {
        responseText = "Safety is engineered into every protocol via Knowledge Vine. We operate with a strict Stop-Work Authority and have successfully logged over 1,500,000 Safe Man-Hours without incident.";
      } else if (lowerText.includes('kv') || lowerText.includes('transmission')) {
        responseText = "Yes. We execute turnkey overhead and underground transmission construction, including high-voltage re-conductors up to 345kV and full right-of-way builds.";
      } else if (lowerText.includes('storm') || lowerText.includes('response')) {
        responseText = "We provide massive-scale emergency storm restoration. Our logistics engine can deploy hundreds of elite linemen within 24 hours of grid collapse.";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'bot', text: responseText }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 9999,
          width: '60px', height: '60px', borderRadius: '50%',
          background: 'var(--blue)', color: 'white',
          border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 30px rgba(0,168,255,0.4)',
        }}
      >
        {isOpen ? <X size={28} /> : <Bot size={28} />}
        {!isOpen && (
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }} transition={{ repeat: Infinity, duration: 2 }}
            style={{ position: 'absolute', inset: -5, borderRadius: '50%', border: '2px solid var(--blue)', pointerEvents: 'none' }}
          />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9, transition: { duration: 0.2 } }}
            transition={{ type: "spring", bounce: 0.3 }}
            style={{
              position: 'fixed', bottom: '6rem', right: '1.5rem', zIndex: 9998,
              width: 'calc(100vw - 3rem)', maxWidth: '400px', height: '600px', maxHeight: '75vh',
              background: 'var(--glass)', backdropFilter: 'blur(16px)',
              border: '1px solid var(--glass-border)', borderRadius: '24px',
              display: 'flex', flexDirection: 'column', overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(0,0,0,0.6), 0 0 40px rgba(0,168,255,0.1)'
            }}
          >
            {/* Header */}
            <div style={{ background: 'var(--dark2)', padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '1px solid var(--glass-border)' }}>
              <div style={{ width: '40px', height: '40px', background: 'rgba(0,168,255,0.1)', border: '1px solid var(--blue)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Bot size={20} color="var(--blue)" />
              </div>
              <div>
                <h3 style={{ fontFamily: 'Bebas Neue', color: 'var(--white)', fontSize: '1.5rem', letterSpacing: '0.05em', lineHeight: 1 }}>SHELTON COPILOT</h3>
                <p style={{ color: 'var(--blue)', fontSize: '0.8rem', fontFamily: 'Barlow Condensed', letterSpacing: '0.1em', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <span style={{ width: '6px', height: '6px', background: 'var(--blue)', borderRadius: '50%', display: 'inline-block' }} /> SYSTEM ONLINE
                </p>
              </div>
            </div>

            {/* Chat Area */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }} className="hide-scrollbar">
              {messages.map((msg) => (
                <motion.div key={msg.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  style={{
                    alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                    maxWidth: '85%', padding: '1rem 1.2rem', borderRadius: '16px',
                    background: msg.sender === 'user' ? 'var(--blue)' : 'var(--dark3)',
                    color: msg.sender === 'user' ? 'white' : 'var(--text-light)',
                    border: msg.sender === 'bot' ? '1px solid var(--glass-border)' : 'none',
                    borderBottomRightRadius: msg.sender === 'user' ? '4px' : '16px',
                    borderBottomLeftRadius: msg.sender === 'bot' ? '4px' : '16px',
                    fontSize: '0.95rem', lineHeight: 1.5
                  }}
                >
                  {msg.text}
                </motion.div>
              ))}
              
              {isTyping && (
                <div style={{ alignSelf: 'flex-start', background: 'var(--dark3)', padding: '1rem', borderRadius: '16px', borderBottomLeftRadius: '4px', border: '1px solid var(--glass-border)' }}>
                  <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1 }} style={{ color: 'var(--blue)', fontSize: '0.85rem', fontWeight: 600 }}>Analyzing Knowledge Base...</motion.div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length === 1 && (
              <div style={{ padding: '0 1.5rem 1rem', display: 'flex', gap: '0.5rem', overflowX: 'auto' }} className="hide-scrollbar">
                <button onClick={() => handleSend("What is your specific safety record?")} style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'var(--dark2)', border: '1px solid var(--glass-border)', color: 'var(--text)', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.8rem', cursor: 'pointer' }}><ShieldAlert size={14} color="var(--red)" /> Safety Record</button>
                <button onClick={() => handleSend("Do you execute 345kV transmission work?")} style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'var(--dark2)', border: '1px solid var(--glass-border)', color: 'var(--text)', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.8rem', cursor: 'pointer' }}><Zap size={14} color="var(--blue)" /> Transmission Specs</button>
              </div>
            )}

            {/* Input Form */}
            <form onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }} style={{ padding: '1rem', background: 'var(--dark)', borderTop: '1px solid var(--glass-border)' }}>
              <div style={{ display: 'flex', gap: '0.5rem', background: 'var(--dark2)', border: '1px solid var(--steel)', borderRadius: '12px', padding: '0.4rem' }}>
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask a technical question..."
                  style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: 'white', padding: '0.5rem 0.8rem', fontSize: '0.95rem' }}
                />
                <button type="submit" disabled={!inputValue.trim() || isTyping} style={{ background: 'var(--blue)', border: 'none', width: '44px', height: '44px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: inputValue.trim() ? 'pointer' : 'not-allowed', opacity: inputValue.trim() ? 1 : 0.5 }}>
                  <Send size={18} color="white" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media(max-width: 900px) {
          /* Push above the mobile action bar */
          button[style*="z-index: 9999"] {
            bottom: 80px !important;
          }
          div[style*="z-index: 9998"] {
            bottom: 150px !important;
            height: 500px !important;
          }
        }
      `}</style>
    </>
  );
}
