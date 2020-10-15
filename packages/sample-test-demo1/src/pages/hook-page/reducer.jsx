import React ,{useReducer, createContext} from 'react';

const reducer = (state,action) => {
  console.log(action);
  switch (action.type) {
    case 'add':
      return {
        ...state,
        name:action.name
      }
      break;
    case 'jianjian':
      return{
        ...state,
        name:action.name
      }
      break;
    default:
      return state
  }
}


export const MyContextT = createContext()
export const RreducerComponent = (props) => {
  let [state, dispatch] = useReducer(reducer,{name:'jack'})
  return(
    <MyContextT.Provider value={{state, dispatch}}>
     {props.children}
    </MyContextT.Provider>
  )
}
