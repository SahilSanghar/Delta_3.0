import React, {useState} from 'react'

const Counter = () => {
    let [count, setCount] = useState(0);

    function incCount() {
        setCount((currCount) => {
            return currCount + 1
        })
        setCount((currCount) => {
            return currCount + 1
        })
    }

return (
    <div>
        <h3>Count = {count} </h3>
        <button onClick={incCount}>Increase Count</button>
    </div>
)
}

export default Counter