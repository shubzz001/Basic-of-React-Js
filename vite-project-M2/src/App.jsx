


import React from 'react'
import State from './04.State/State'
import AProps from './03props/AProps'
import Header from './Screens/Header'
import IsLoggedState from './05ConditionalRendering/IsLoggedState'
import SwitchisLogged from './05ConditionalRendering/SwitchisLogged'
import UseEffect from './06UseEffect/UseEffect'
import Ref from './07UseRef/Ref'
import ContextApi from './08ContextAPI/ContextApi'
import Consume from './08ContextAPI/Consume'
import Consume1 from './08ContextAPI/Consume1'
import CSSModule from './09ModuleCss/CSSModule'
// import Home from './09ModuleCss/Home'
import Task from './09ModuleCss/StyledCompoents'
import StyledCompoents from './09ModuleCss/StyledCompoents'
import From from './10FormHandling/From'
import RegistrationFrom from './10FormHandling/RegistrationFrom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './11Router/About'
import Contact from './11Router/Contact'
import Error from './11Router/Error'
import Home from './11Router/Home'
import Navbar from './11Router/Navbar'
import Axios from './12Axios/Axios'
import CHome from './13CRUD/CHome'
import CCreate from './13CRUD/CCreate'
import CRead from './13CRUD/CRead'
import CUpdate from './13CRUD/CUpdate'
import CRUD from './13CRUD/CRUD'
const App = () => {
  return (
    <>
      <Header />

      {/* <AProps /> */}
      {/* <AProps /> */}
      {/* <State /> */}
      {/* <IsLoggedState /> */}
      {/* <SwitchisLogged /> */}
      <UseEffect />
      {/* <Ref /> */}
      {/* <ContextApi>
      <Consume/>
      <Consume1/>
    </ContextApi> */}

      {/* //!ContextAPI */}
      {/* <CSSModule />
    <Home/> */}

      {/* //!StyledCompoents */}
      {/* <StyledCompoents/> */}



      {/* //! Form Handling  */}
      {/* <From/> */}
      {/* <RegistrationFrom /> */}


      {/* //!-- Router */}
      {/* <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter> */}

      {/* //! AXIOS */}
      {/* <Axios /> */}


      {/* //! CRUD */}
      {/* <CRUD /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CHome />} />
          <Route path='/create' element={<CCreate />} />
          <Route path='/read' element={<CRead />} />
          <Route path='/update' element={<CUpdate />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App