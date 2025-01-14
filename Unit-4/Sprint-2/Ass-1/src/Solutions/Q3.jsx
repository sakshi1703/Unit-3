import { useEffect, useState } from "react"

export const Counter = ()=>{

    const [count, setCount] = useState(0)

    useEffect(()=>{
        console.log(count)
    },[count])

    return(
        <>
        <h1>Counter Application</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        </>
    )
}
