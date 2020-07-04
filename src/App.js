import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import Origin from './Origin'
import './App.css';



const App = () => (
  <Provider store={store}>
    <div className="App">
      <Origin />
    </div>
  </Provider>
)


export default App


