import React from'react'

import ReactDom from 'react-dom'

import{Provider}from 'react-redux'

import {createStore} from 'redux'

import store from './store/index.js'

import App from './App.js'

import Counter from './Counter.js'

import './../src/Assests/Css/Styles.css'

import './../src/dist/css/bootstrap.css'

let initialstate={ ms:10 }

function reducer(state=initialstate,action)

{
    switch(action.type)
    {
      case 'incriment':
      return({ ms:state.ms+1 });break

      case 'decrement':
      return({ ms:state.ms-1 });break

      default: 
      return state
    }
}

// const store=createStore(reducer);

store.dispatch({type:'incriment'})
store.dispatch({type:'decrement'})


ReactDom.render(<Provider store={store}><App/>
</Provider>
,document.getElementById('root'))