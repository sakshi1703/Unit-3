
const App = ()=>{
    const [active, setActive] = React.useState("home")

    const handleNav = (page, e)=>{
        e.preventDefault();
        setActive(page)
    }

    const pageCont = {
        home: <h1>Welcome to Home page</h1>,
        about: <h1>Welcome to About Us page</h1>,
        contact: <h1>Welcome to contact Page</h1>
    }

    return(
        <div>
            <Navbar handleNav={handleNav}/>
            <div>
                {
                    pageCont[active] 
                }
            </div>
        </div>
        
    )
}
const Navbar = ({handleNav})=>{
    return(
        <nav>
            <a href = "#home" onClick = {(e)=>handleNav("home", e)}>Home</a>
            <a href = "#about" onClick = {(e)=>handleNav("about", e)}>About Us</a>
            <a href = "#contact" onClick = {(e)=>handleNav("contact", e)}>Contact</a>
        </nav>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)