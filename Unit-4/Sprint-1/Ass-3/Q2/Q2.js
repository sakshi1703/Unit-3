// const { steps } = require("framer-motion")

const Counter = ()=>{
    const [count, setCount] = React.useState(0)
    const [step, setStep] = React.useState(1)

    const handleIncrease=()=>{
        setCount(count+Number(step))
    }
    const handleDecrease=()=>{
        setCount(count > 0 ? count-Number(step) : 0)
    }

    return(
        <>
        <button onClick={handleIncrease}>Increase</button>
        <h1>{count}</h1>
        <input type="number" placeholder="Enter number" value={step} onChange={(e)=>setStep(e.target.value)} />
        <br/><br/>
        <button onClick={handleDecrease}>Decrease</button>
        </>
    )
}


const App = ()=>{
    return(
        <Counter/>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)