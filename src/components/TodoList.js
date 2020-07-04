import React from 'react'
import { connect } from 'react-redux'
import * as acciones from '../redux/actions/acciones'

const TodoList = ({todos, elimina}) => {
    return (
        todos.map((todo, i) =>{
            return(
                <div className="col-md-4" key={i}>
                    <div className="card mt-4">
                    <div className="card-header">
                        <h3>{todo.title}</h3>
                        <span className="badge badge-pill badge-danger ml-2">
                        {todo.priority}
                        </span>
                    </div>
                    <div className="card-body">
                        <p>{todo.description}</p>
                        <p><mark>{todo.responsible}</mark></p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-danger" onClick={()=>{elimina(todo, i)}}>Delete</button>
                    </div>
                </div>
                </div>
            )
        })
    )
}


const mapStateToProps = (state) => ({
    todos: state.todos
})

export default connect(mapStateToProps, acciones)(TodoList)




