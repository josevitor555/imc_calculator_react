
import './App.css'
import './input.css'

import { data } from "./data/data";

import { useState } from 'react';
import BMICalculator from './components/BMICalculator'
import BMITable from './components/BMITable';

function App() {
  const [bmi, setBMI] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  const calcBmi = (e, height, weight) => {
    e.preventDefault();

    // console.log(height, weight);
    
    if (!weight || !height) return;
    const weightFloat = +weight.replace(",", ".");
    const heightFloat = +height.replace(",", ".");    

    const bmiResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

    setBMI(bmiResult);
    // console.log(bmiResult);

    data.forEach((item) => {
      if (bmiResult >= item.min && bmiResult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    });
    if (!info) return;
  };

  const resetCalc = (e) => {
    e.preventDefault();

    setBMI("");
      setInfo("");
      setInfoClass("");
  };

  return (
    <div className="container">
      {!bmi ? (
        <BMICalculator calcBmi={calcBmi}/>
      ): (
        <BMITable data={data} bmi={bmi} info={info} infoClass={infoClass} resetCalc={resetCalc} />
      )}
    </div>
  )
}

export default App
