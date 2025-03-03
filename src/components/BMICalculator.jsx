// import BMICalculator from "./BMICalculator.module.css" -- CSS Module (Its bad)
import "./BMICalculator.css"

import { useState } from "react"
import Button from "./Button"

const ImcCalculator = ({ calcBmi }) => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const clearForm = (e) => {
        e.preventDefault();
        setHeight("");
        setWeight("");
    }

    const formatNumber = (value) => {
        return value.replace(/[^0-9,]/g, "");
    }

    const handleHeightChange = (e) => {
        const updatedValue = formatNumber(e.target.value);
        setHeight(updatedValue);
    }

    const handleWeightChange = (e) => {
        const updatedValue = formatNumber(e.target.value);
        setWeight(updatedValue);
    }

    return (
        <div id='bmi__calculator'>
            <h2 className="text-2xx"> Body Mass Index Calculator </h2>

            <form action="" id="bmi-form">
                <div className="form-inputs">
                    <div className="form-control">
                        <label htmlFor="height"> Your Height </label>
                        <input type="text" name='height' id='height' placeholder='Your Height Here' onChange={(e) => handleHeightChange(e)} value={height} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="weight"> Your weight </label>
                        <input type="text" name="weight" id="weight" placeholder="Your Weight Here" onChange={(e) => handleWeightChange(e)} value={weight} />
                    </div>
                </div>

                <div className="action-control">
                    <Button id="calc-btn" text="Calculate" action={(e) => calcBmi(e, height, weight)}> Calculate </Button>
                    <Button id="clear-btn" text="Clear" action={clearForm}> Clear </Button>
                </div>
            </form>
        </div>
    )
}

export default ImcCalculator
