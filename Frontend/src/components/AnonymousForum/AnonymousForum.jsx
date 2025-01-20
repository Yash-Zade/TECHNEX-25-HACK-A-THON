import React, { useState } from 'react';
import { Send, User, Users, Search, Plus, MessageSquare, MoreVertical } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AnonymousForum = () => {
  const [selectedForum, setSelectedForum] = useState(null);
  const [messageInput, setMessageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentUser] = useState({ id: 1 });

  const forums = [
    {
      id: 1,
      name: "Tech Career Discussions",
      description: "Share experiences and advice about tech careers",
      members: 234,
      messages: [
        {
          id: 1,
          content: "What skills are most in demand for full-stack developers in 2024?",
          timestamp: "2024-01-20T10:30:00",
          author: "Anonymous #1234"
        },
        {
          id: 2,
          content: "React, Node.js, and cloud platforms like AWS are consistently top requirements.",
          timestamp: "2024-01-20T10:35:00",
          author: "Anonymous #5678"
        }
      ]
    },
    {
      id: 2,
      name: "Startup Ideas",
      description: "Brainstorm and discuss innovative startup ideas",
      members: 156,
      messages: [
        {
          id: 1,
          content: "Looking for feedback on my AI-powered productivity tool idea",
          timestamp: "2024-01-20T11:30:00",
          author: "Anonymous #9012"
        }
      ]
    },
    {
      id: 3,
      name: "Interview Prep",
      description: "Practice and share interview experiences",
      members: 189,
      messages: []
    }
  ];

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const handleSendMessage = () => {
    if (!messageInput.trim() || !selectedForum) return;

    const newMessage = {
      id: Date.now(),
      content: messageInput,
      timestamp: new Date().toISOString(),
      author: "Anonymous #" + Math.floor(1000 + Math.random() * 9000)
    };

    selectedForum.messages.push(newMessage);
    setMessageInput('');
  };

  const filteredForums = forums.filter(forum => 
    forum.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    forum.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-[600px] pt-20 w-full bg-gradient-to-br from-emerald-900 via-gray-900 to-emerald-900 p-4 mt-0">
      <div className="h-full w-full mx-auto bg-gray-900/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-emerald-700/30 shadow-2xl flex">
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden fixed top-6 left-6 z-50 p-2 bg-gray-800/80 backdrop-blur-sm rounded-full"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <MessageSquare className="w-6 h-6 text-emerald-400" />
        </button>

        {/* Forums List */}
        <div className={`w-80 bg-gray-800/50 backdrop-blur-md border-r border-emerald-700/30 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0 transition-transform duration-300 absolute lg:relative z-40 h-full`}>
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-white">Forums</h1>
              <motion.button
                className="p-2 hover:bg-emerald-900/30 rounded-full text-gray-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Plus className="w-5 h-5" />
              </motion.button>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search forums..."
                className="w-full p-3 pl-10 bg-gray-900/50 text-gray-100 rounded-xl border border-emerald-700/30 focus:outline-none focus:border-emerald-500/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="w-5 h-5 text-gray-500 absolute left-3 top-3.5" />
            </div>
          </div>

          <div className="overflow-y-auto h-[calc(100%-5rem)]">
            <AnimatePresence>
              {filteredForums.map((forum) => (
                <motion.div
                  key={forum.id}
                  className={`p-4 hover:bg-emerald-900/30 cursor-pointer transition-colors duration-200
                    ${selectedForum?.id === forum.id ? 'bg-emerald-900/40' : ''}`}
                  onClick={() => {
                    setSelectedForum(forum);
                    setIsSidebarOpen(false);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white">
                        <MessageSquare className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-gray-100 truncate">{forum.name}</h3>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Users className="w-4 h-4 mr-1" />
                          {forum.members}
                        </div>
                      </div>
                      <p className="text-sm text-gray-400 truncate">{forum.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Forum Messages */}
        <div className="flex-1 flex flex-col">
          {selectedForum ? (
            <>
              <div className="p-4 bg-gray-800/30 backdrop-blur-sm border-b border-emerald-700/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white">
                        <MessageSquare className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-100">{selectedForum.name}</h3>
                      <span className="text-sm text-gray-400">{selectedForum.members} members</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 hover:bg-emerald-900/30 rounded-full text-gray-300">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                <AnimatePresence>
                  {selectedForum.messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      className="flex justify-start"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                    >
                      <motion.div
                        className="max-w-[70%] p-3 rounded-2xl bg-gray-700/50 backdrop-blur-sm text-gray-100"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="text-xs text-emerald-400 mb-1">{msg.author}</div>
                        <p>{msg.content}</p>
                        <span className="text-xs mt-1 opacity-70 block">
                          {formatTime(msg.timestamp)}
                        </span>
                      </motion.div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="p-4 bg-gray-800/30 backdrop-blur-sm border-t border-emerald-700/30">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Share your thoughts anonymously..."
                    className="flex-1 p-3 bg-gray-900/50 text-gray-100 rounded-xl border border-emerald-700/30 focus:outline-none focus:border-emerald-500/50"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSendMessage();
                      }
                    }}
                  />
                  <motion.button 
                    className="p-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-xl"
                    onClick={handleSendMessage}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-6">
              <div className="w-16 h-16 bg-emerald-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-emerald-400" />
              </div>
              <h2 className="text-xl font-semibold text-gray-100">
                Select a forum to join the discussion
              </h2>
              <p className="text-gray-400 mt-2">
                Choose from available forums or create a new one
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnonymousForum;