import React from 'react'
import { useDispatch } from 'react-redux'
import { addNumber, plusTwo, removeAll } from '../../actions/numbersAction'
import "./numbercontrol.scss"

const NumbersControl = (props) => {
const dispatch=useDispatch()
const generateNumber=()=>{
        const randomNumber =Math.round(Math.random()*100)

        const num ={
            id:Number (new Date()),
            value:randomNumber
        }
        dispatch(addNumber(num))
    }

const handlePlusTwo=()=>{
        dispatch(plusTwo())
    }
const handleRemoveAll=()=>{
    dispatch(removeAll())

}
  return (
    <div className='buttons'>
      <button onClick={generateNumber}>Generate</button>
      <button onClick={handlePlusTwo}>+2</button>
      <button onClick={handleRemoveAll}>Remove All</button>
    </div>
  )
}

export default NumbersControl
