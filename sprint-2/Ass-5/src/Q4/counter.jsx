
import { useState, useEffect } from "react";

const Counter = ()=>{
    const [count, setcount] = useState(0);

    useEffect(()=>{
        console.log({count})
    },[count])
    

    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>setcount(count+1)}>Increment</button>
        <button onClick={()=>setcount(count-1)}>Decrement</button>
        <button onClick={()=>setcount(0)}>Reset</button>
        </>
    )
    
    
}

export default Counter;