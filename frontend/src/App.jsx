import React from 'react'
import LoginPageDivs from './divisions/LoginPage'
import RegistrationPageDivs from './divisions/RegistrationPage'
import DMsDivs from './divisions/DMs'


const App = () => {
  return (
    <>
      <RegistrationPageDivs />
      <LoginPageDivs />
      <DMsDivs />
    </>
  )
}

export default App