import { createStore } from 'redux'
import {ACT_TITLE, ACT_RESP, ACT_DESC, ACT_PRIO, GUARD, ELIMIN} from './redux/actions/actionsTypes'

const initialState = {
    title: '',
    responsible: '',
    description: '',
    priority: 'low',
    todos:[]
}


const reduceTodos = (state = initialState, action) => {

    switch(action.type){
        case ACT_TITLE:
            console.log(state)
            return{
                ...state,
                title: action.payload
            }

        case ACT_RESP:
            return{
                ...state,
                responsible: action.payload
            }

        case ACT_DESC:
            return{
                ...state,
                description: action.payload
            }
        
        case ACT_PRIO:
            return{
                ...state,
                priority: action.payload
            }
        
        case GUARD:
            return {
                ...state, todos: [
                    ...state.todos,
                    {
                        title: state.title, 
                        responsible: state.responsible,
                        description: state.description, 
                        priority: state.priority
                    }], title:'', responsible: '', description:'', priority:'low'
            } 

        case ELIMIN:
            console.log(action)
            return{
                ...state,
                todos: state.todos.filter(i  => action.payload !== i)
            }

        default:
            return state
    }
}

export default createStore(reduceTodos)

