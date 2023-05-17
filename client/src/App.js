import './App.css';
import Boxes from './components/Boxes';
import ColorBoxForm from './components/ColorBoxForm';
import React, { useState } from 'react';

function App() {
  const [allColors, setAllColors] = useState([]);
  return (
    <div className="App">
      <ColorBoxForm allColors = {allColors} setAllColors = {setAllColors}/>
      <Boxes allColors = {allColors}/>
    </div>
  );
}

export default App;
