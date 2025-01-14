import { useEffect, useState } from "react";

const AddJokes = ()=>{

    const [joke, setJoke] = useState("")

    const FetchJoke = async ()=>{
        const res = await fetch("https://official-joke-api.appspot.com/random_joke")
        const data = await res.json();
        setJoke(data)
    }

    useEffect(()=>{
        FetchJoke()
    },[])

    return(
        <>
        <h1>Jokes 😂</h1>
        {
            <div>
                <h3>{joke.setup}</h3>
                <p>{joke.punchline}</p>
            </div>
        }
        <button onClick={FetchJoke}>Next Joke</button>
        </>
    )
}

export default AddJokes;