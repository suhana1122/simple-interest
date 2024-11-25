import TextField from '@mui/material/TextField';
import './App.css'
import { Button, Stack } from '@mui/material';
import { useState } from 'react';





function App() {



  const [amount, setAmount] = useState("")
  const [rate, setRate] = useState("")
  const [year, setYear] = useState("")
  const [isInvalidPrinciple, setIsInvalidPrinciple] = useState(false)
  const [isInvalidRate, setIsInvalidRate] = useState(false)
  const [isInvalidyear, setIsInvalidYear] = useState(false)
  const [interest, setInterest] = useState("")




  console.log(amount);
  console.log(rate);
  console.log(year);
  console.log(interest);

  // console.log(isInvalidPrinciple);





  const validateInput = (tag) => {
    const { name, value } = tag
    console.log(name, value);

    // value.match(/^[0-9]*.?[0-9]+$/)   // + only one time * multiple time indicate

    if (value == "") {

      if (name == 'Amount') {
        setAmount("")

      }
      else if (name == 'Rate') {
        setRate("")

      }

      else {
        setYear("")

      }

    } else {

      if (!!value.match(/^[0-9]*.?[0-9]+$/)) {

        if (name == "Amount") {
          setAmount(value)
          setIsInvalidPrinciple(false)

        }
        else if (name == "Rate") {
          setRate(value)
          setIsInvalidRate(false)

        }
        else {
          setYear(value)
          setIsInvalidYear(false)
        }

      } else {

        if (name == "Amount") {
          setIsInvalidPrinciple(true)

        }
        else if (name == "Rate") {
          setIsInvalidRate(true)

        }
        else {
          setIsInvalidYear(true)
        }

      }

    }

  }

  const handleCalculate = (e) => {

    e.preventDefault()
    console.log("button clicked");

    if (amount && rate && year) {

      setInterest(amount * rate * year / 100)

    }
    else {
      alert("enter field completely")
    }

  }

  const handleReset = () => {

    setAmount(0)
    setRate(0)
    setYear(0)
    setInterest(0)
    setIsInvalidPrinciple(false)
    setIsInvalidRate(false)
    setIsInvalidYear(false)
    // setFormData(initialState);
  };



  return (
    <>
      <div className='d-flex justify-content-center align-items-center bg-dark' style={{ height: "100vh" }}>
        <div className='bg-light p-5 rounded' style={{ width: "500px" }}>
          <div>
            <h2>Simple Interest Calculator</h2>
            <p>calculate Your Simple Interest Easily</p>
          </div>

          {/* -----card------- */}
          <div className='d-flex justify-content-center align-items-center text-center bg-warning w-100 rounded mt-4 text-light' style={{ height: "150px" }}>
            <div>
              <h4>₹ {interest}</h4>
              <h4>Total Simple Interest</h4>
            </div>
          </div>


          {/*------ text field---------  */}

          <form >

            <TextField name='Amount' value={amount} onChange={(e) => validateInput(e.target)} id="principleAmount" label=" ₹ Amount" variant="outlined" className='w-100 mt-4 rounded' />

            {isInvalidPrinciple &&

              <div className='text-danger fw-bold' style={{ fontFamily: "sans-serif" }}>Invalid Amount</div>


            }

            <TextField value={rate} onChange={(e) => validateInput(e.target)} name='Rate' id="interest" label="Interest" variant="outlined" className='w-100 mt-3 rounded' />
            {isInvalidRate &&

              <div className='text-danger fw-bold' style={{ fontFamily: "sans-serif" }}>Invalid Rate</div>


            }

            <TextField value={year} onChange={(e) => validateInput(e.target)} name='Year' id="YeraTime" label="Year" variant="outlined" className='w-100 mt-3 rounded' />

            {isInvalidyear &&

              <div className='text-danger fw-bold' style={{ fontFamily: "sans-serif" }}>Invalid Year</div>


            }

            {/*------- button--------  */}
            <Stack direction="row" spacing={2} className='mt-3'>

              <Button disabled={isInvalidPrinciple || isInvalidRate || isInvalidyear} onClick={(e) => handleCalculate(e)} type='submit' variant="contained" className='w-50 p-2 bg-dark text-light ' >CALCULATE</Button>

              <Button onClick={handleReset} variant="outlined" className='w-50 p-2  text-primary '>RESET</Button>

            </Stack>
          </form>


        </div>

      </div>
    </>
  )
}

export default App
