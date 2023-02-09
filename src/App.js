import React from 'react'
import './App.scss'
import NumbersContianer from './components/numbersapp/NumbersContainer'

const App = () => {
  return (
    <div className='App'>
      <div className='appborder'>
         <h1>Random Number Generator</h1>
        <div className='Container'>
            <NumbersContianer/>
        </div>
     
      </div>
      

    </div>
  )
}

export default App

















// import { useDispatch, useSelector } from 'react-redux';
// import './App.css';
// import { decrement, increment, reset, incrementBy } from './actions/countAction';

// function App() {

//   const count = useSelector((state)=>{
//     return state.count 
//   })
//   const dispatch =useDispatch()
//   return (
//     <div className="App">
//           <h2>Random Numbers</h2>
//           <h2>Count:{count}</h2>
//           <button onClick={()=>{
//             dispatch(increment())
//           }}>+1</button>
//           <button onClick={()=>{
//             dispatch(decrement())
//           }}>-1</button>
//           <button onClick={()=>{
//             dispatch(incrementBy())
//           }}>+5</button>
//           <button onClick={()=>{
//             dispatch(reset())
//           }}>Reset</button>
//     </div>
//   );
// }

// export default App;
