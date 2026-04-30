import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login_page from './Final_Designs/Login_page'
import './style.css'
import './Final_Designs/Login_page.css'
import Regstration_page from './Final_Designs/Registration_page/Registration_page'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Regstration_page />
  </StrictMode>
)

