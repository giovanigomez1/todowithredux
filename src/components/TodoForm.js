import React from 'react';
import { connect } from 'react-redux'
import * as acciones from '../redux/actions/acciones'


const TodoForm = ({actualizaTitulo, actualizaResp, actualizaDescr, actualizaPrior, guardar, state}) => {
    return(
        <div>
            <form className="card-body mt-4 mr-4" onSubmit={e => {e.preventDefault(); guardar()}}>
                     <div className="form-group p-2">
                         <input type="text" className="form-control" placeholder="Title" 
                         name="title" onChange={e => actualizaTitulo(e.target.value)} id="title" value={state.title} required='true'/>
                     </div>
                     <div className="form-group p-2">
                         <input type="text" className="form-control" placeholder="Responsible" 
                         name="responsible" onChange={e => actualizaResp(e.target.value)} id="responsible"
                         value={state.responsible} required='true'/>
                     </div>
                     <div className="form-group p-2">
                         <input type="text" className="form-control" placeholder="description" 
                         name="description" onChange={e => actualizaDescr(e.target.value)} id="description"
                         value={state.description} required='true'/>
                     </div>
                     <div className="form-group p-2">
                         <select name="priority" className="form-control" onChange={e => actualizaPrior(e.target.value)}
                         value={state.priority}>
                             <option value="low">low</option>
                             <option value="medium">medium</option>
                             <option value="high">high</option>
                         </select>
                     </div>
                     <button type="submit" className="btn btn-primary">Save</button>
                </form>
        </div>
    )
}


const mapStateToProps = state => ({
    state: state
})

export default connect(mapStateToProps, acciones )(TodoForm)























// import React, { Component}  from 'react'


// class TodoForm extends Component {
//     constructor(){
//         super();
//         this.state = {
//             title: '',
//             responsible: '',
//             description: '',
//             priority: 'low'
//         };
//     }
    
//     handleInput = (e) =>{
//         this.setState({
//             [e.target.name]: e.target.value
//         })
        
//     }
    

//     handleSubmit = (e) =>{
//         e.preventDefault()
//         let btn = document.getElementById("title")
//         let res = document.getElementById("responsible")
//         let des = document.getElementById("description")
//         btn.value = ''
//         res.value = ''
//         des.value = ''
//         this.props.onAddTodo(this.state) 
//     }
    
//     render(){
//         return(
//            <React.Fragment>
//                <form className="card-body mt-4 mr-4" onSubmit={this.handleSubmit}>
//                     <div className="form-group p-2">
//                         <input type="text" className="form-control" placeholder="Title" 
//                         name="title" onChange={this.handleInput} id="title"/>
//                     </div>
//                     <div className="form-group p-2">
//                         <input type="text" className="form-control" placeholder="Responsible" 
//                         name="responsible" onChange={this.handleInput} id="responsible"/>
//                     </div>
//                     <div className="form-group p-2">
//                         <input type="text" className="form-control" placeholder="description" 
//                         name="description" onChange={this.handleInput} id="description"/>
//                     </div>
//                     <div className="form-group p-2">
//                         <select name="priority" className="form-control" onChange={this.handleInput}>
//                             <option value="low">low</option>
//                             <option value="medium">medium</option>
//                             <option value="high">high</option>
//                         </select>
//                     </div>
//                     <button type="submit" className="btn btn-primary">Save</button>
//                </form>
//            </React.Fragment>
//         )
//     }

// }

// export default TodoForm