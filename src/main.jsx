import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FeedPage from './pages/feed.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FeedPage />
  </StrictMode>,
)
