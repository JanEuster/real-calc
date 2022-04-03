import { useState, useEffect } from 'react';
import './App.css';
import CalcButtons from './components/Buttons';
const calcImg = require("./casio_fx-82de_plus.png")


const BUTTONS = [
  { value: "SHIFT", x: 30, y: 280, width: 55, height: 45 },
  { value: "ALPHA", x: 85, y: 287, width: 55, height: 45 },
  { value: "MODE", x: 255.5, y: 287, width: 55, height: 45 },
  { value: "ON", x: 310.5, y: 280, width: 55, height: 45 },

  { value: "left", x: 140, y: 305, width: 40, height: 45 },
  { value: "up", x: 176, y: 274, width: 45, height: 40 },
  { value: "right", x: 217, y: 305, width: 40, height: 45 },
  { value: "down", x: 176, y: 340, width: 45, height: 40 },

  { value: "abs(", x: 30, y: 350, width: 52.5, height: 35 },
  { value: "^3", x: 82.5, y: 350, width: 52.5, height: 35 },
  { value: "^-1", x: 258, y: 350, width: 52.5, height: 35 },
  { value: "log", x: 310.5, y: 350, width: 52.5, height: 35 },

  { value: "--", x: 34, y: 397.5, width: 52.5, height: 35 },
  { value: "sqrt(", x: 88.5, y: 397.5, width: 52.5, height: 35 },
  { value: "^2", x: 142.5, y: 397.5, width: 52.5, height: 35 },
  { value: "^", x: 197.5, y: 397.5, width: 52.5, height: 35 },
  { value: "log(", x: 253.5, y: 397.5, width: 52.5, height: 35 },
  { value: "ln(", x: 307.5, y: 397.5, width: 52.5, height: 35 },

  { value: "(-)", x: 34, y: 444, width: 52.5, height: 35 },
  { value: "., ,,", x: 88.5, y: 444, width: 52.5, height: 35 },
  { value: "hyp(", x: 142.5, y: 444, width: 52.5, height: 35 },
  { value: "sin(", x: 197.5, y: 444, width: 52.5, height: 35 },
  { value: "cos(", x: 253.5, y: 444, width: 52.5, height: 35 },
  { value: "tan(", x: 307.5, y: 444, width: 52.5, height: 35 },

  { value: "RCL", x: 34, y: 490, width: 52.5, height: 35 },
  { value: "ENG", x: 88.5, y: 490, width: 52.5, height: 35 },
  { value: "(", x: 142.5, y: 490, width: 52.5, height: 35 },
  { value: ")", x: 197.5, y: 490, width: 52.5, height: 35 },
  { value: "S-D", x: 253.5, y: 490, width: 52.5, height: 35 },
  { value: "M+", x: 307.5, y: 490, width: 52.5, height: 35 },


  { value: "7", x: 35, y: 540, width: 62.5, height: 45 },
  { value: "8", x: 100.5, y: 540, width: 62.5, height: 45 },
  { value: "9", x: 166, y: 540, width: 62.5, height: 45 },
  { value: "DEL", x: 231.5, y: 540, width: 62.5, height: 45 },
  { value: "AC", x: 299, y: 540, width: 62.5, height: 45 },

  { value: "4", x: 35, y: 596.5, width: 62.5, height: 45 },
  { value: "5", x: 100.5, y: 596.5, width: 62.5, height: 45 },
  { value: "6", x: 166, y: 596.5, width: 62.5, height: 45 },
  { value: "*", x: 231.5, y: 596.5, width: 62.5, height: 45 },
  { value: "/", x: 299, y: 596.5, width: 62.5, height: 45 },

  { value: "1", x: 35, y: 653, width: 62.5, height: 45 },
  { value: "2", x: 100.5, y: 653, width: 62.5, height: 45 },
  { value: "3", x: 166, y: 653, width: 62.5, height: 45 },
  { value: "+", x: 231.5, y: 653, width: 62.5, height: 45 },
  { value: "-", x: 299, y: 653, width: 62.5, height: 45 },

  { value: "0", x: 37.5, y: 710.5, width: 62.5, height: 45 },
  { value: ",", x: 100.5, y: 710.5, width: 62.5, height: 45 },
  { value: "x10^", x: 166, y: 710.5, width: 62.5, height: 45 },
  { value: "Ans", x: 231.5, y: 710.5, width: 62.5, height: 45 },
  { value: "=", x: 298, y: 710.5, width: 62.5, height: 45 },
]



function App() {
  let [expr, setExpr] = useState([""]);

  useEffect(() => {
    let str = "";
    expr.forEach((e) => {
      str += e;
    })
    console.log(str);
  }, [expr])

  return (
    <div className="App">
      <div className='draggable' />
      <img
        src={calcImg}
        alt="Calculator Graphic"
        className='calc-img'
      ></img>
      <CalcButtons buttons={BUTTONS} keyCallback={(e) => setExpr([...expr, e])} />
    </div>
  );
}

export default App;
