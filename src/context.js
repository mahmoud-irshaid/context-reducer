import React, {useReducer ,createContext} from 'react';
import { Reducers } from './reducers';
export const Context = createContext()

const ContextProvider = (props)=>{
const [list, dispatch] = useReducer(Reducers, [])

return(
    <Context.Provider value={{list,dispatch}}>
       {props.children} 
    </Context.Provider>
)
}

export default ContextProvider