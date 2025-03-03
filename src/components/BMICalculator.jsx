// import BMICalculator from "./BMICalculator.module.css" -- CSS Module (Its bad)
import "./BMICalculator.css"

const ImcCalculator = () => {
  return (
    <div id='bmi__calculator'>
        <h2 className="text-2xx"> Body Mass Index Calculator </h2>

        <form action="" id="imc-form">
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="height"> Your Height </label>
                    <input type="text" name='height' id='height' placeholder='Your Height Here' />
                </div>
                <div className="form-control">
                    <label htmlFor="weight"> Your weight </label>
                    <input type="text" name="weight" id="weight" placeholder="Your Weight Here" />
                </div>
            </div>

            <div className="action-control">
                <button id="calc-btn" text="Calculate"> Calculate </button>
                <button id="clear-btn" text="Clear"> Clear </button>
            </div>
        </form>
    </div>
  )
}

export default ImcCalculator
