import React from "react"
import { Link } from "react-router-dom"


function Navigation(){
    return(
        <nav style={{
            display: "flex", justifyContent: "space-around"
        }}>
            <Link to="/Income">Income</Link>
            <Link to="/Expenses">Expenses</Link>
            <Link to="/Transactions">Transactions</Link>
            <Link to="/Savings">Savings</Link>
        </nav>
    )
}

export default Navigation;