import { useState } from 'react'
import Sidebar from '../components/shared/sidebar'
import Navbar from '../components/shared/navbar'
import PostTemplate from '../components/post'
import PostForm from '../components/shared/postForm'
import FriendSuggestion from '../components/shared/friendSuggestion'
import MusicPlayer from '../components/musicPlayer'

function FeedPage() {
  return (
    <div className='flex bg-[#111315]'>
      <Sidebar />
      <div className='flex flex-col w-full'>
        <Navbar />
        <div className='flex h-full'>
          <div className="w-2/3 h-[85vh] overflow-y-scroll scrollbar-thin p-10 no-scrollbar">
            <PostForm />
            <PostTemplate />
            <PostTemplate />
          </div>

          <div className="w-1/3 h-[85vh] p-10 bg-[#1A1D1F]">
            <section className='bg-[#272B30] p-2 rounded-md'>
              <FriendSuggestion />
              <FriendSuggestion />
              <FriendSuggestion />
              <FriendSuggestion />
            </section>
            <section className='bg-[#272B30] mt-5 p-2 rounded-md'>
              <MusicPlayer />
            </section>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedPage
