import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";

const LiveChat = () => {
  const loggedInUser = useSelector((store) => store?.user?.loggedInUser?.username);
  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [userColors, setUserColors] = useState({});
  const socketRef = useRef(null);
  const messagesEndRef = useRef(null);

  const getUserColor = (username) => {
    if (!userColors[username]) {
      const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      setUserColors((prev) => ({ ...prev, [username]: newColor }));
      return newColor;
    }
    return userColors[username];
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = () => {
    if (userMessage.trim() === "" || !loggedInUser) return;

    socketRef.current.emit("new_message", {
      sender: loggedInUser,
      message: userMessage,
    });

    setMessages((prev) => [
      ...prev,
      {
        sender: loggedInUser,
        message: userMessage,
        color: getUserColor(loggedInUser),
        isCurrentUser: true,
      },
    ]);

    setUserMessage("");
  };

  useEffect(() => {
    socketRef.current = io("http://localhost:8080");

    socketRef.current.on("all_messages", (data) => {
      const formatted = data.map((msg) => ({
        sender: msg.sender,
        message: msg.message,
        color: getUserColor(msg.sender),
        isCurrentUser: msg.sender === loggedInUser,
      }));
      setMessages(formatted);
    });

    socketRef.current.on("server_message", (newMsg) => {
      setMessages((prev) => [
        ...prev,
        {
          sender: newMsg.sender,
          message: newMsg.message,
          color: getUserColor(newMsg.sender),
          isCurrentUser: newMsg.sender === loggedInUser,
        },
      ]);
    });

    return () => {
      socketRef.current?.disconnect();
    };
  }, [loggedInUser]);

  return (
<div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-sm h-[60vh] lg:h-[86.5vh] flex flex-col bg-[#191919] rounded-2xl shadow-lg border border-[#232323] overflow-hidden">
      {/* Header */}
      <div className="bg-[#232323] px-4 py-3 border-b border-[#2B2B2B] flex items-center justify-between">
        {/* <span className="text-white font-semibold text-base">Live Chat</span> */}
        {/* Example badges */}
        <div className="flex gap-2">
          <div className="flex flex-wrap gap-4">
  {/* B - 2 months */}
  <button className="flex items-center gap-2">
    <span className="bg-green-900 text-white text-xs px-1 py-2 rounded-full"><span className="bg-green-400 px-2 py-1 rounded-full ">B</span> 2 months</span>
  </button>

  {/* H - $4.99 */}
  <button className="flex items-center gap-2">
    <span className="bg-blue-900 text-white text-xs px-1 py-2 rounded-full"><span className="bg-blue-400 px-2 py-1 rounded-full">H</span> $4.99</span>
  </button>

  {/* P - 1 year */}
  <button className="flex items-center gap-2">
    <span className="bg-purple-900 text-white text-xs px-1 py-2 rounded-full"><span className="bg-purple-400 px-2 py-1 rounded-full">P</span> 1 year</span>
  </button>

  {/* S - $50 */}
  <button className="flex items-center gap-2 block md:hidden">
  <span className="bg-green-900 text-white text-xs px-1 py-2 rounded-full">
    <span className="bg-green-400 px-2 py-1 rounded-full">S</span> $50
  </span>
</button>
</div>
        </div>
      </div>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.isCurrentUser ? "justify-end" : "justify-start"}`}
          >
            <div className="rounded-lg px-3 py-2 bg-[#232323] max-w-[80%]">
              <span className="text-xs font-semibold" style={{ color: msg.color }}>
                {msg.sender}
              </span>
              <p className="text-xs text-white font-normal break-words">
                {msg.message}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      {/* Input or Sign-in */}
      <div className="w-full px-4 py-3 bg-[#232323] border-t border-[#2B2B2B]">
        {loggedInUser ? (
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type a message..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              className="flex-1 bg-[#2B2B2B] text-white px-3 py-2 rounded-lg border border-[#3B3B3B] focus:outline-none focus:border-[#FECC30] text-xs"
            />
            <button
              onClick={handleSubmit}
              className="bg-[#FECC30] text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors text-xs font-semibold"
            >
              Send
            </button>
          </div>
        ) : (
          <div className="text-center text-gray-400 py-2 text-xs">
            <button className="w-full bg-[#232323] text-white py-2 rounded-lg border border-[#3B3B3B] mt-2 cursor-pointer">
              Sign in to chat
            </button>
            <div className="mt-1 text-[10px] text-gray-500">
              All messages that you send will appear publicly
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveChat;