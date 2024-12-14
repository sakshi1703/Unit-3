import { Link } from "react-router-dom";


function Home(){
    return(
        <>
        <header>This is Header</header>
        <p>This is Home page</p>
        <h4>Welcome to my Website</h4>
        <nav style={{display: "flex", justifyContent: "space-around" }}>
            <Link to="/" >Home</Link>
            <Link to="/About" >About</Link>
            <Link to="/Contact" >Contact</Link>
        </nav>
        <br/>
        <footer>Copyright © 2024 - 2030 TermsFeed®. All rights reserved.</footer>
        </>
        
    )
}

export default Home;