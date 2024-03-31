import React, {useState, useEffect} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const [county, setCounty] = useState(0)

    let incCount = () => {
        setCount((currCount) => currCount + 1)
    }

    let incCounty = () => {
        setCounty((currCount) => currCount + 1)
    }

    useEffect(function printSomething() {
        console.log("This is a side-effect")
    }, [])

return (
    <div>
    <h3>Count = {count}</h3>
    <button onClick={incCount}>+1</button>
    <h3>Count = {county}</h3>
    <button onClick={incCounty}>+1</button>
    </div>
)
}

export default Counter