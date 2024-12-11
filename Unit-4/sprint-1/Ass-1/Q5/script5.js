
function Navbar({ Navclick }){
    return(
        <nav style ={{display: "flex", gap: "10px"} }>
            <a href="#" onClick = {()=>Navclick("Home")}><b>Home</b></a>
            <a href="#" onClick = {()=>Navclick("About")}><b>About</b></a>
            <a href="#" onClick = {()=>Navclick("Contact")}><b>Contact</b></a>
        </nav>
    )
}

function Home(){
    return(
        <>
        <h1 style={{color: "red"}}>This is Home Page</h1>
        <h4>Welcome to Home Page</h4>
        </>
    )
}

function About(){
    return(
        <>
        <h1 style={{color: "green"}}>This is About Page</h1>
        <h4>Welcome to About Page</h4>
        </>
    )
}

function Contact(){
    return(
        <>
        <h1 style={{color: "blue"}}>This is Contact Page</h1>
        <h4>Welcome to Contact Page</h4>
        </>
    )
}

function App(){
    const [activePage, setActivePage] = React.useState("Home");
    
    return(
        <>
            <Navbar Navclick={setActivePage}/>
            {activePage === "Home" && <Home/>}
            {activePage === "About" && <About/>}
            {activePage === "Contact" && <Contact/>}
        </>
    )

}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)