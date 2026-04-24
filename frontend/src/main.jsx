import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./Final_Designs/Registration_page/Registration_page.css";
import Login_page from './Final_Designs/Login_page'
import Registration_page from './Final_Designs/Registration_page/Registration_page';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Registration_page />
  </StrictMode>,
)
