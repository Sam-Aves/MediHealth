import { useState, useRef, useEffect } from "react";
import { MessageSquare, X } from "lucide-react";

const Chatbox = () => {
  const [open, setOpen] = useState(false); // toggle chat window
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle sending messages
  const handleSend = (e) => {
    e.preventDefault(); // Prevent double submission
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    
    // Clear input
    setInput("");

    // Mock bot reply (for now)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Thanks for your message! We'll get back to you soon." },
      ]);
    }, 800);
  };

  return (
    <>
      {/* Floating Chat Icon */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-xl z-50 hover:scale-105 transition-transform"
        >
          <MessageSquare className="w-7 h-7 text-white" />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-6 right-6 w-80 md:w-96 h-96 bg-base-100 shadow-2xl rounded-2xl flex flex-col overflow-hidden z-50">
          
          {/* Header */}
          <div className="bg-primary text-white flex justify-between items-center px-4 py-3">
            <h4 className="font-semibold">Chat with us</h4>
            <button onClick={() => setOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-base-200">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl max-w-[75%] ${
                  msg.sender === "user" ? "bg-primary text-white ml-auto" : "bg-base-100 text-base-content"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="flex border-t border-base-300 p-3 gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 input input-bordered rounded-xl"
            />
            <button type="submit" className="btn btn-primary rounded-xl">
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbox;
