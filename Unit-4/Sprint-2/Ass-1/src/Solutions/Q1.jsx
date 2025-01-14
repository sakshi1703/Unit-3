import { useState } from "react"

const HeaderQue=()=> {
  const [show, setShow] = useState("home")

  const handleNav = (sec)=>{
    setShow(sec)
  }

  return (
    <>
    {/* Header with title */}
      <h1>Vite</h1>

    {/* Navbar with three links */}
      <nav>
        <a href='#home' onClick={()=>handleNav("home")}>Home</a>
        <a href='#about' onClick={()=>handleNav("about")}>About</a>
        <a href='#contact' onClick={()=>handleNav("contact")}>Contact</a>
      </nav>

      {show === "home" &&
      (<div id='home'>
      <h2>Welcome to Home page</h2>
      <p>Welcome to the home page. Click the navigation links to explore more.</p>
    </div>)
      }

      {show === "about" &&
      (<div id='about'>
      <h2>Welcome to About Page</h2>
      <p>This is the about page. Learn more about our project here.</p>
    </div>)
      }
      
      {show === "contact" &&
      (<div id="contact">
        <h2>Contact Page</h2>
        <p>If you need to get in touch, here is how you can contact us.</p>
      </div>)
      }
      

    {/* Welcome message */}
      <div>
        <h1>Welcome to Vite</h1>
        <p>Explore more by clicking on liks above</p>
      </div>

      {/* Footer */}
      <footer>&copy; 2025 Your Company. All Rights Reserved.
      Made with ❤️ in React
      </footer>
    </>
  )
}

export default HeaderQue
