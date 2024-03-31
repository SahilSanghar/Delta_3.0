// import { ur } from '@faker-js/faker';
// import { json } from 'express';
import React, { useState, useEffect } from 'react'

const Joker = () => {
    const [Joker, setJoker] = useState({})

    const URL = "https://official-joke-api.appspot.com/random_joke";

    const getNewJoke = async () => {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        console.log(jsonResponse)
        setJoker({setup: jsonResponse.setup, punchline: jsonResponse.punchline})
    }

    useEffect(() => {
        async function getFirstJoke() {
            let response = await fetch(URL);
            let jsonResponse = await response.json();
            console.log(jsonResponse)
            setJoker({setup: jsonResponse.setup, punchline: jsonResponse.punchline})
        }
        getFirstJoke();
    }, [])

return (
    <div>
        <h3>Joker!</h3>
        <h2>{Joker.setup}</h2>
        <h2>{Joker.punchline}</h2>
        <button onClick={getNewJoke}>New Joke</button>
    </div>
)
}

export default Joker