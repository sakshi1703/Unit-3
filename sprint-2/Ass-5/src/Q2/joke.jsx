import { useState, useEffect } from "react";

export const RandomJokes = () =>{

    const [joke, setJoke] = useState(null);

    const fetchJoke = async() =>{
        try{
            const res = await fetch("https://official-joke-api.appspot.com/random_joke")
            const data = await res.json();
            setJoke(data);
        }
        catch (error){
            console.log("error")
        }
    }

    useEffect(()=>{
        fetchJoke();
    },[]);

    return(
        <div>
            {
                joke ?
                (
                <>
                <h2>{joke.setup}</h2>
                <p>{joke.punchline}</p>
                </>
                ):(
                
                <p>Loading...</p>
                )
            }
            <button onClick={fetchJoke}>Get Another Joke</button>
        </div>
    )

}




// interface Car{
//     brand: String,
//     year: Number,
//     price: Number,
//     isSuv: Boolean,
//     registration ? : Number,
//     color: string[]
// }

// let obj1 : Car{
//     brand: "Toyo"
// }