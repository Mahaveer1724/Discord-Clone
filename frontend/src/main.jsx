import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Registration_page from './Final_Designs/Registration_page/Registration_page'
import Login_page from './Final_Designs/Login_page'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login_page />
  </StrictMode>,
)
