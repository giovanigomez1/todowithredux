import React from 'react'
import { connect } from 'react-redux'


const Navigations = ({todos}) =>{
return(
    <nav className="navbar navbar-dark bg-dark">
        <a href="#" className="text-white">
            Tareas
            <span className="badge badge-pill badge-light ml-2">
                {todos.length}
            </span>
        </a>
    </nav>
    )
}



const mapStateToProps = (state) => ({
    todos: state.todos
})


export default connect(mapStateToProps, null)(Navigations)

