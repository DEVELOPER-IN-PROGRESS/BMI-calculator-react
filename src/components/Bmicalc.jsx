import React from 'react'
import {useState} from 'react'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'


function BMI() {

    const [ wtht , setWtht ] = useState({
        weight:'',
        height: ''
    })

    const [system , setSystem] = useState({
        length: 'm',
        mass: 'kg'
    })

    const handleCalculate = () => {

    }

    const toggleCheck = (e) => {
        console.log(e.target.checked)
        let state = e.target.checked

        state? setSystem({ length: 'in"', mass: '(lbs)'}) : setSystem({ length: 'm',mass: 'kg'})
    }

    const validate = (e) =>{

        const {value,id }  = e.target;
        // console.log(id,value)


        /* zero or numbers without leading zeroes but decimal is optional
        if decimal is present it should end with digits  */
        let regexp = '^(0|[1-9][0-9]*)(\.[0-9]+)?$';

        if(value.match(regexp)){
            setWtht({...wtht, [id]:value})
        }else{

        }
        console.log(wtht)
    }

    return(
    <>
     <div id="bmi" className="container flex flex-col items-center justify-center mx-auto md:w-[400px] lg:w-[500px] p-2 md:p-4 rounded-[20px]  bg-sky-200">

            <h1 className="title my-2"> BMI Calculator</h1>

            <div className="gender my-2 bg-slate-800 rounded-[30px] w-[150px] h-[60px]">

            </div>

            <div class="switch-toggle">
                <input class="switch-toggle-checkbox" onClick={(e)=>{toggleCheck(e)}} type="checkbox"  id="pricing-plan-switch" />
                <label class="switch-toggle-label" for="pricing-plan-switch">
                    <span>Metric (m)</span>
                    <span>Imperial(in)</span>
                </label>
            </div>

            <div className="my-2"></div>

            <div className="mb-3 relative">
                <label className="absolute right-5 text-black" htmlFor="weight">{system.length}</label>
                {/* <p className="text-danger"> Invalid input </p> */}
                <TextField id="weight"  onChange={(e) => {validate(e)}} label="Weight" variant="outlined" />
            </div>
            <div className="mb-3 relative">
            <label className="absolute right-5 text-black" htmlFor="height">{system.mass}</label>
                <TextField id="height" onChange={(e) => {validate(e)}} label="Height" variant="outlined" />
            </div>
            {/* Speedometer */}
            <div className="mb-3"></div>

            <div className="mt-3">
                <Button variant="contained" onClick={() => {handleCalculate}}>Calculate BMI</Button>
            </div>
     </div>
    </>
    );
}

export default BMI

