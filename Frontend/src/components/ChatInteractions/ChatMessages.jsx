import React, { useState, useEffect } from 'react';
import { Search, MessageSquare, Mail, Phone, Video, Send, MoreVertical, X } from 'lucide-react';
const ChatMessages = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [messages, setMessages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentUser] = useState({ id: 1 });
  // Dummy data remains the same as your original code
  const dummyContacts = [
    {
      id: 1,
      name: "John Doe",
      role: "Software Developer",
      lastMessage: "Hey, how's your job search going?",
      lastMessageTime: "10:30 AM",
      unreadCount: 2,
      online: true,
    },
    // ... other contacts
  ];

  const dummyMessages = [
    {
      id: 1,
      sender: 1,
      content: "Hey, how's your job search going?",
      timestamp: "10:30 AM"
    },
    // ... other messages
  ];

  useEffect(() => {
    setContacts(dummyContacts);
    setMessages(dummyMessages);
  }, []);

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  const handleSendMessage = () => {
    if (!messageInput.trim() || !selectedContact) return;

    const newMessage = {
      id: messages.length + 1,
      sender: currentUser.id,
      content: messageInput,
      timestamp: new Date().toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit' 
      })
    };

    setMessages([...messages, newMessage]);
    setMessageInput('');
  };

  return (
    <div className="h-[545px] w-full bg-gradient-to-br from-emerald-900 via-gray-900 to-emerald-900 p-4 mt-0">
      <div className="h-full w-full mx-auto bg-gray-900/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-emerald-700/30 shadow-2xl flex">
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden fixed top-6 left-6 z-50 p-2 bg-gray-800/80 backdrop-blur-sm rounded-full"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <MessageSquare className="w-6 h-6 text-emerald-400" />
        </button>

        {/* Sidebar */}
        <div className={`w-80 bg-gray-800/50 backdrop-blur-md border-r border-emerald-700/30 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0 transition-transform duration-300 absolute lg:relative z-40 h-full`}>
          <div className="p-4">
            <h1 className="text-2xl font-bold text-white mb-4">Messages</h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Search contacts..."
                className="w-full p-3 pl-10 bg-gray-900/50 text-gray-100 rounded-xl border border-emerald-700/30 focus:outline-none focus:border-emerald-500/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="w-5 h-5 text-gray-500 absolute left-3 top-3.5" />
            </div>
          </div>

          <div className="overflow-y-auto h-[calc(100%-5rem)]">
            {contacts
              .filter(contact => contact.name.toLowerCase().includes(searchQuery.toLowerCase()))
              .map(contact => (
                <div
                  key={contact.id}
                  className={`p-4 hover:bg-emerald-900/30 cursor-pointer transition-colors duration-200
                    ${selectedContact?.id === contact.id ? 'bg-emerald-900/40' : ''}`}
                  onClick={() => {
                    setSelectedContact(contact);
                    setIsSidebarOpen(false);
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {getInitials(contact.name)}
                      </div>
                      {contact.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 rounded-full border-2 border-gray-800" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-gray-100 truncate">{contact.name}</h3>
                        <span className="text-xs text-gray-400">{contact.lastMessageTime}</span>
                      </div>
                      <p className="text-sm text-gray-400">{contact.role}</p>
                      <div className="flex justify-between items-center mt-1">
                        <p className="text-sm text-gray-300 truncate">{contact.lastMessage}</p>
                        {contact.unreadCount > 0 && (
                          <span className="ml-2 bg-emerald-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {contact.unreadCount}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {selectedContact ? (
            <>
              {/* Chat Header */}
              <div className="p-4 bg-gray-800/30 backdrop-blur-sm border-b border-emerald-700/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white">
                        {getInitials(selectedContact.name)}
                      </div>
                      {selectedContact.online && (
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-gray-800" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-100">{selectedContact.name}</h3>
                      <span className="text-sm text-gray-400">
                        {selectedContact.online ? 'Online' : 'Offline'}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 hover:bg-emerald-900/30 rounded-full text-gray-300">
                      <Phone className="w-5 h-5" />
                    </button>
                    <button className="p-2 hover:bg-emerald-900/30 rounded-full text-gray-300">
                      <Video className="w-5 h-5" />
                    </button>
                    <button className="p-2 hover:bg-emerald-900/30 rounded-full text-gray-300">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === currentUser.id ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] p-3 rounded-2xl ${
                        message.sender === currentUser.id
                          ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white'
                          : 'bg-gray-700/50 backdrop-blur-sm text-gray-100'
                      }`}
                    >
                      <p>{message.content}</p>
                      <span className="text-xs mt-1 opacity-70 block">
                        {message.timestamp}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 bg-gray-800/30 backdrop-blur-sm border-t border-emerald-700/30">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 p-3 bg-gray-900/50 text-gray-100 rounded-xl border border-emerald-700/30 focus:outline-none focus:border-emerald-500/50"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSendMessage();
                      }
                    }}
                  />
                  <button 
                    className="p-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-xl"
                    onClick={handleSendMessage} 
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="h-full flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-emerald-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-emerald-400" />
                </div>
                <h2 className="text-xl font-semibold text-gray-100">
                  Select a contact to start messaging
                </h2>
                <p className="text-gray-400 mt-2">
                  Choose from your existing conversations or start a new one
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessages;