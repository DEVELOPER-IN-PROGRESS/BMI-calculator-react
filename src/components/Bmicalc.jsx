import React from 'react'
import {useState} from 'react'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'

function BMI() {

    const [ wtht , setWtht ] = useState({ weight:'', height: '' })
    const [system , setSystem] = useState({ length: 'm',   mass: 'kg' })
    const [error , setError] = useState({})
    const [isHeight, setIsHeight] = useState(false)
    const [isWeight, setIsWeight] = useState(false)
    const [isbmi , setIsbmi] = useState(false)
    const [bmi , setBmi] = useState("")

    const handleCalculate = () => {

        if(!wtht.height || !wtht.weight){
            console.log('Invalid')
            setIsbmi(false)
            return
        }
        console.log(wtht)

        let res = (Number(wtht.weight)/(Number(wtht.height)**2)).toFixed(2)
        setBmi(res)
        setIsbmi(true)

    }

    const handleReset = () => {
        setWtht({ weight:'',
            height: ''})
        setIsHeight(false)
        setIsWeight(false)
        setIsbmi(false)
    }

    const toggleCheck = (e) => {
        console.log(e.target.checked)
        let state = e.target.checked

        state? setSystem({ length: 'in"', mass: 'lbs'}) : setSystem({ length: 'm',mass: 'kg'})
    }

    const validate = (id,value) =>  {

        switch(id){
            case 'weight':
                        if(system.weight == 'kg'){
                            return wtht.weight < "700"
                        }else{
                            return wtht.weight < "1490"
                        }
            case 'height':
                        if(system.height == "m"){
                            return wtht.height < "3"
                        }else{
                            return wtht.height < "9.9"
                        }
        }

    }

    const handleChange = (e) =>{

        const {value,id }  = e.target;
        // console.log(id,value)

        /* zero or numbers without leading zeroes but decimal is optional
        if decimal is present it should end with digits  */
        let regexp = '^(0|[1-9][0-9]*)(\.[0-9]+)?$';

        (id=="height")? setIsHeight(true): setIsWeight(true);

        setWtht({...wtht, [id]:value})
        if(value.match(regexp)){
            // let res = validate(id,value)

        }else{

        }
        // console.log(wtht)
    }

    return(
    <>
     <div id="bmi" className="container flex flex-col items-center justify-center mx-auto md:w-[400px] lg:w-[500px] p-2 md:p-4 rounded-[20px]  bg-sky-200">

            <h1 className="title text-black my-2"> BMI Calculator</h1>

            <div className="gender hidden my-2 bg-slate-800 rounded-[30px] w-[150px] h-[60px]">

            </div>

            <div class="switch-toggle my-5">
                <input class="switch-toggle-checkbox" onClick={(e)=>{toggleCheck(e)}} type="checkbox"  id="pricing-plan-switch" />
                <label class="switch-toggle-label" for="pricing-plan-switch">
                    <span>Metric (m)</span>
                    <span>Imperial(in)</span>
                </label>
            </div>

            <div className="my-2"></div>

            <div className="mb-3 relative">
                <label className="absolute right-2 top-[50%] -translate-[50%] text-black" htmlFor="weight">({system.length})</label>
                {/* { isWeight && <p className="text-red-500"> Invalid weight value </p> } */}
                <TextField id="height"  value={wtht.height} onChange={(e) => { handleChange(e)}} label="Height" variant="outlined" />
            </div>
            <div className="mb-3 relative">
            <label className="absolute right-2 top-[50%] -translate-[50%] text-black" htmlFor="height">({system.mass})</label>
                {/* { isHeight && <p className="text-red-500"> Invalid height value </p> } */}
                <TextField id="weight" value={wtht.weight} onChange={(e) => { handleChange(e)}} label="Weight" variant="outlined" />
            </div>

            <div className="mb-3"></div>

            { (isHeight && isWeight && isbmi) && <p className='text-green-800 fs-3 my-5'>Your BMI is {bmi}</p>}

            <div className="mt-3 flex justify-content-center gap-x-3">
                <Button variant="contained" color="success" className="outline-0" onClick={() => {handleReset()}}>Reset</Button>
                <Button variant="contained"  className="outline-0" onClick={() => { handleCalculate()}}>Calculate BMI</Button>
            </div>
     </div>
    </>
    );
}

export default BMI

