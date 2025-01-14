import React,{useState} from 'react';
import "./App.css";


const App = () => {

  const [height,setHeight] = useState(180);
  const [weight,setWeight] = useState(70);

  function onWeightChange(event){
    setWeight(event.target.value);
  }
  function onHeightChange(event){
    setHeight(event.target.value);
  }
  function BMI(e1,e2){
    return (e2/((e1/100)*(e1/100))).toFixed(1) ;
  }
  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className='input-section'>
        <p className='slider-output'>Weight: {weight} Kg</p>
        <input className='input-slider slider'
         type="range" step="1" min="40" max="200"
         onChange={onWeightChange} value={weight}/>
        <p className='slider-output'>Height: {height} cm</p>
        <input className='input-slider slider' 
        type="range" step="1" min="100" max="240"
        onChange={onHeightChange} value={height}/>
      </div>
      <div className='output-section'>
        <p>Your BMI is </p>
        <p className='output'>{BMI(height,weight)}</p>
      </div>
    </main>
  )
}

export default App
