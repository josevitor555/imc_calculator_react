import React from 'react'

const ImcCalculator = () => {
  return (
    <div id='imc__calculator'>
        <h2> Imc Calculator </h2>

        <form action="" id="imc-form">
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="height"> Your Height </label>
                    <input type="text" name='height' id='height' placeholder='Your Height Here' />
                </div>
                <div className="form-control">
                    <label htmlFor="wight"> Your wight </label>
                    <input type="text" name='wight' id='wight' placeholder='Your wight Here' />
                </div>
            </div>

            <div className="action-control">
                <button> Calculate </button>
                <button> Clean </button>
            </div>
        </form>
    </div>
  )
}

export default ImcCalculator
