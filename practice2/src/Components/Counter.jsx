import { addCounter,reduceCounter } from "../Redux/action";
import React from "react";

import { AppContext } from "./AppContextProvider";

const Counter = ()=>{
    
//    const {counter}= store.getState();
   const [count,setCount] = React.useState(0);
   const {dispatch,getState}=React.useContext(AppContext);
    const {counter} =getState();

    const forceUpdate =()=>setCount(count+1);
   const handleAdd=()=>{
            dispatch(addCounter(1))
           forceUpdate();
   }

    const handleReduce=()=>{
            dispatch(reduceCounter(1))
            forceUpdate();
   }

    return <>
    <h1>Counter:{counter}</h1>
    <button onClick={handleAdd }>ADD</button>
    <button onClick={handleReduce}>REDUCE</button>
    </>
}

export {Counter};