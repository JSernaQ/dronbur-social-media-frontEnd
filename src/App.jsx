import { useState } from 'react'
import Sidebar from './components/shared/sidebar'
import Navbar from './components/shared/navbar'
import ChatsPage from './pages/chats'


function App() {
  return (
    <div className='flex bg-[#111315]'>
      <Sidebar />
      <div className='flex flex-col w-full'>
        <Navbar />
        <div className='flex h-full'>
          <div className="w-2/3 h-[85vh] overflow-y-scroll scrollbar-thin p-10 no-scrollbar bg-white">
            <ChatsPage />
          </div>
          
          <div className="w-1/3 h-[85vh] p-10 bg-green-300">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
