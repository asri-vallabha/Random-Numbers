import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, removenumber } from '../../actions/numbersAction'
import "./numberlist.scss"

const NumbersList = (props) => {

    const dispatch=useDispatch()
    const numbers = useSelector((state)=>{
        return state.numbers
    })

const handleIncrement=(id)=>{
    dispatch(increment(id))

}
const handleDecrement =(id)=>{
    dispatch(decrement(id))
     
}

const handleRemove=(id)=>{
    dispatch(removenumber(id))

}
  return (
    <div className='numberList'>
        <div className='Nlist'>
            {
                numbers.length === 0 ? (
                    <div className='h3'>
                         <h3>Empty</h3>
                    </div>
                   
                ):(
                    <ul className='ul'>
            {
                numbers.map((num)=>{
            return <li key={num.id}><b>{num.value}</b>
            <button onClick={()=>{
                handleIncrement(num.id)}}>+</button>

            <button onClick={()=>{
                handleDecrement(num.id)}}>-</button>

            <button onClick={()=>{
                handleRemove(num.id)}}>x</button>
            </li>
        })
      } 
        </ul>
     

                )
            }
        </div>
        
    </div>
  )
}

export default NumbersList
