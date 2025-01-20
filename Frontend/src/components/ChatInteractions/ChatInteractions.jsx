import React from 'react'
import ChatMessages from './ChatMessages';

function ChatInteractions() {
  return (
    <div className="w-full">
        <div className='  w-full flex justify-center pt-16 bg-gray-900 h-auto overflow-auto'>
          <ChatMessages/>
        </div>
    </div>
  )
}

export default ChatInteractions;