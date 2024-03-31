function handleOnClick() {
    console.log("Hello World")
}

function handleMouseOver() {
    console.log("Bye!")
}

function handleDbClick() {
    console.log("Button was DB clicked")
}

export default function Button() {
    return (
        <div>
            <button onClick={handleDbClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptates eaque architecto! Nisi, labore sunt, dolorem suscipit soluta nam, enim quos nulla sed itaque placeat deleniti expedita mollitia nobis cupiditate!</p>
            <button onDoubleClick={handleDbClick}>Button was Double Click</button>
        </div>
    )
}