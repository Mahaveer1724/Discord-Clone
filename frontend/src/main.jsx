import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login_page from './Final_Designs/Login_page'
import './style.css'
import './Final_Designs/Login_page.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login_page />
  </StrictMode>
)

