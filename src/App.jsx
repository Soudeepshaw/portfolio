import React from 'react';

import './App.css'


import AppAppBar from './Components/AppBar';
import { ThemeContextProvider } from './Components/ThemeContext';
import LandingPage from './Components/Landing';


function App() {
  return (
      <ThemeContextProvider>
        <AppAppBar/>
        <LandingPage></LandingPage>
      </ThemeContextProvider>
  )
}

export default App
