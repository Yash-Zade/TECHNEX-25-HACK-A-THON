// Message page
import React from 'react'
import ChatMessages from './ChatMessages';
function ChatInteractions() {
  return (
    <div>
        <div className='flex justify-center mt-20  bg-gray-900 h-screen'>
          <ChatMessages/>
        </div>
    </div>
  )
}

export default ChatInteractions ;