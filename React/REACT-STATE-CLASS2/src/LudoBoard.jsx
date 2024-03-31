import React, {useState} from 'react'

const LudoBoard = () => {
    const [moves, setMoves] = useState({blue: 0, yellow: 0, green: 0, red: 0})
    const [arr, setArr] = useState(["no moves"])

    function updateBlue() {
        // setMoves((prevMoves) => {
        //     return { ...prevMoves, blue: moves.blue + 1}
        // })

        setArr((prevArr) => {return [...prevArr, "blue moves"]})
        console.log(arr)
    }

    function updateYellow() {
        setMoves((prevMoves) => {
            return { ...prevMoves, yellow: moves.yellow + 1}
        })
    }

    function updateGreen() {
        setMoves((prevMoves) => {
            return { ...prevMoves, green: moves.green + 1}
        })
    }

    function updateRed() {
        setMoves((prevMoves) => {
            return { ...prevMoves, red: moves.red + 1}
        })
    }

return (
    <div>
        <p>Game Begins!</p>
        <div className="board">
            <p>Blue move = {moves.blue}</p>
            <button style={{backgroundColor: "red"}} onClick={updateBlue}>+1</button>
            <p>Yellow move = {moves.yellow}</p>
            <button style={{backgroundColor: "yellow", color: "black"}} onClick={updateYellow}>+1</button>
            <p>Green move = {moves.green}</p>
            <button style={{backgroundColor: "green"}} onClick={updateGreen}>+1</button>
            <p>Red move = {moves.red}</p>
            <button style={{backgroundColor: "red"}} onClick={updateRed}>+1</button>
        </div>
    </div>
)
}

export default LudoBoard