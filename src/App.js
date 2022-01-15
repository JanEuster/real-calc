import logo from './logo.svg';
import './App.css';
import styled from "styled-components"
const calcImg = require("./casio_fx-82de_plus.png")


function App() {
  return (
    <div className="App">
      <div className='draggable'/>
      <img
        src={calcImg}
        alt="Calculator Graphic"
        className='calc-img'
      ></img>
    </div>
  );
}

export default App;
