import React, { Component,useState, useEffect, useRef, createContext, useContext, useMemo, useCallback, useReducer} from 'react';
import { Button } from 'choerodon-ui/pro'
import MyContext from './myContext'
import {RreducerComponent,MyContextT} from './reducer'

 const Children = (props) => {
   let count = useContext(MyContext)
   let redux = useContext(MyContextT)
   console.log(redux);
   return (
     <>
     我是子组件{props.count} && {count}
     <br/>
     <Button onClick={
       () => {
         redux.dispatch({
           type:'add',
           nameL:'ja88ck'
         })
       }
     }>子组件</Button>
     </>
   )
 }

 const HookIndex  = () => {
  const  [count,setCount] = useState(0);
  const  [num,setNum] = useState(1);
//componentDidMount componentDidUpdate componentUnmount
  useEffect(() => {
    console.log('useEffect');
    return () => {

    }
  })

//useRef
  const refEle = useRef(null)

//shouldComponentUpdate
  useMemo(() => {
    console.log('useMemo');
  },[num])

//shouldComponentUpdate
  const countCallBack = useCallback(() => {
    return count
  })



  return (
     <>
     count:{count}
      <br/>

     <Button
       ref={refEle}
       onClick={() => {
       setCount(count + 1 )
     }}>state按钮</Button>
     <br/>
     <MyContext.Provider value={count} >
         <Children count={count}/>
     </MyContext.Provider>

     <RreducerComponent>
         <Children />
     </RreducerComponent>
     </>
  );

}

export default HookIndex
