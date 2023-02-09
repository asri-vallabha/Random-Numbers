import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ConfigureStore from './store/ConfigureStore';
import { increment,decrement, incrementBy,reset } from './actions/countAction';
import { Provider } from 'react-redux';

const store =ConfigureStore()
//console.log(store)
console.log('state', store.getState())

store.subscribe(()=>{
  console.log('state updated', store.getState())
})
ReactDOM.render(<Provider store ={store}>
  <App/>
</Provider>,document.getElementById('root'))
