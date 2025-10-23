import { useState } from 'react'
import './App.css'

function App() {
  let [color, setColor] = useState("white");
  let colorStory = {
    red: "Energy, passion, and boldness fill the air!",
    brown: "Warm and earthy a touch of stability and comfort.",
    tomato: "Fresh and lively just like a summer day!",
    gray: "Simple, balanced, and effortlessly elegant.",
    azure: "Cool, calm, and peaceful sky tone light and refreshing.",
    teal: "Refreshing, modern, & a perfect balance of blue and green.",
    blue: "Peaceful, confident, and endlessly deep.",
    pink: "Soft, cheerful, and full of love.",
    purple: "Creative, royal, and full of imagination.",
    green: "Nature’s calm peaceful, fresh, and growing.",
    olive: "Earthy and unique, calm confidence in color form.",
    maroon: "Rich and powerful a mark of depth and elegance.",
    navy: "Strong and steady the color of wisdom and night skies.",
    black: "Bold, sleek, and timeless true sophistication.",
    wheat: "Soft, cozy, and warm like sunlight through curtains."
  }

  let colorStat = "";
  for (let key in colorStory) {
    if (key === color) {
      colorStat = colorStory[key];
    }
  }
  let lightColor = ['tomato', 'azure', 'pink', 'wheat'];
  let text_color = lightColor.includes(color)?"black" : "white";

  return (
    <div className="main" style={{ backgroundColor: color }} >

      <div className="msg">
        <h3 style={{color:text_color}}>{color}</h3>
        <p style={{color:text_color}} >{colorStat}</p>
      </div>

      <div className="footer">
        <button style={{ backgroundColor: 'red' }} onClick={() => (setColor("red"))} ></button>
        <button style={{ backgroundColor: 'brown' }} onClick={() => (setColor("brown"))} ></button>
        <button style={{ backgroundColor: 'tomato', color: 'black' }} onClick={() => (setColor("tomato"))} ></button>
        <button style={{ backgroundColor: 'gray' }} onClick={() => (setColor("gray"))} ></button>
        <button style={{ backgroundColor: 'azure', color: 'black' }} onClick={() => (setColor("azure"))} ></button>
        <button style={{ backgroundColor: 'teal' }} onClick={() => (setColor("teal"))} ></button>
        <button style={{ backgroundColor: 'blue' }} onClick={() => (setColor("blue"))} ></button>
        <button style={{ backgroundColor: 'pink', color: 'black' }} onClick={() => (setColor("pink"))} ></button>
        <button style={{ backgroundColor: 'purple' }} onClick={() => (setColor("purple"))} ></button>
        <button style={{ backgroundColor: 'green' }} onClick={() => (setColor("green"))} ></button>
        <button style={{ backgroundColor: 'olive' }} onClick={() => (setColor("olive"))} ></button>
        <button style={{ backgroundColor: 'maroon' }} onClick={() => (setColor("maroon"))} ></button>
        <button style={{ backgroundColor: 'navy' }} onClick={() => (setColor("navy"))} ></button>
        <button style={{ backgroundColor: 'black' }} onClick={() => (setColor("black"))} ></button>
        <button style={{ backgroundColor: 'wheat', color: 'black' }} onClick={() => (setColor("wheat"))} ></button>
      </div>
    </div>


  )
}

export default App
