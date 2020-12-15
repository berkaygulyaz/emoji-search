import React from 'react'
import './App.css'
import Container from './components/container'
import Search from './components/search'
import Emojis from "./components/emojis"


function App() {
  return (
    <Container>
      <Search />
      <Emojis />
    </Container>
  );
}

export default App;
