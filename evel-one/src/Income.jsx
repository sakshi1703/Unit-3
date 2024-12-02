import React, { useState } from "react";



function Income(){
    const [submit, setSubmit] = useState({
        amount: "",
        description: "",
        date: "",
    })

    function handleChange(e){
        const{name, value} = e.target;
        setSubmit({...submit, [name]: value});
    }

    const handleClick = async (e)=>{
        const firebaseUrl = "https://finance-manager-b6d78-default-rtdb.firebaseio.com/income.json"
    }

    return(
        <>
        <h1>Income</h1>
        <form>
            <div>
                <h2>Amount</h2>
                <input type="text" name="Amount" onChange={handleChange} />
            </div>
            <div>
            <h2>Description</h2>
                <input type="text" name="Amount" onChange={handleChange} />
            </div>
            <div>
            <h2>Date</h2>
                <input type="text" name="Amount" onChange={handleChange} />
            </div>
            <br/>
            <button type="submit" onSubmit={handleClick}>Submit</button>
        </form>
        </>
    )
}

export default Income;