import React from 'react'
import { useDispatch } from 'react-redux'
import { addNumber } from '../../actions/numbersAction'
import "./addnumber.scss"

const AddNUmbers = (props) => {
    const dispatch=useDispatch()
    const [number,setNumber]=React.useState('')
    const handleChange=(e)=>{
        setNumber(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const num={
            id:Number (new Date()),
            value: Number(number)
        }
        dispatch(addNumber(num))
        setNumber('')
    }
  return (
    <div className='addnumber'>
        <form onSubmit={handleSubmit}>
            <input type="text" value={number} placeholder="Type here....." onChange={handleChange}/>
        </form>
      
    </div>
  )
}

export default AddNUmbers
