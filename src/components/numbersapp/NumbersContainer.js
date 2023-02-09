import React from 'react'
import {useSelector} from 'react-redux'
import AddNUmbers from './AddNUmbers'
import NumbersControl from './NumbersControl'
import NumbersList from './NumbersList'
import "./numbercontainer.scss"

const NumbersContianer= (props) => {
    const numbers = useSelector((state)=>{
        return state.numbers
    })

    const findSum=()=>{
      let sum =0
      numbers.forEach((ele)=>{
        sum += ele.value
      })
      return sum 
    }
        
  return (
    <div className='NumbersContainer'>
      <div className='HeadLines'>
      <h2>Total:{numbers.length}</h2>
      <h2>Sum :{findSum()}</h2>
      </div>
      <div className='allItems'>
        <NumbersList/>
        <NumbersControl/>
        <AddNUmbers/>
      </div>
        
    </div>
  )
}

export default NumbersContianer
