import {ACT_TITLE, ACT_RESP, ACT_DESC, ACT_PRIO, GUARD, ELIMIN} from './actionsTypes' 


export const actualizaTitulo = (e) =>{
    return{
        type: ACT_TITLE, 
        payload: e
    }
}

export const actualizaResp = (e) => {
    return{
        type: ACT_RESP, 
        payload: e
    }
}

export const actualizaDescr = (e) =>{
    return{
        type: ACT_DESC, 
        payload: e
    }
}

export const actualizaPrior = (e) =>{
    return{
        type: ACT_PRIO, 
        payload: e
    }
}

export const guardar = () =>{
    return{
        type: GUARD
    }
}


export const elimina = (todo, i) =>{
    return{
        type: ELIMIN, 
        payload: todo, i
    }
}

