import React from 'react';

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Navigation from './components/Navigatios'
import logo from './logo.svg';

const Origin = () => {

    return (
        <main>
            <Navigation />
           <div className="container">
             <div className="row">
             <div className="col-md-4 mt-4">
             <img src={logo} className="App-logo" alt="logo" />
               <TodoForm />
             </div>
             <div className="col-md-8">
               <div className="row mt-4">
                 <TodoList/>
               </div>
             </div>
             </div>
           </div>

        </main>       
    )
}

export default Origin