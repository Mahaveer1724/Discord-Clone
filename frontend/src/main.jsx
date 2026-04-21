import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./Final_Designs/Login_page.css";
import Login_page from './Final_Designs/Login_page'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login_page />
  </StrictMode>,
)
