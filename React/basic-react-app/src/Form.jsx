import React from 'react'

function handleFormSubmit() {
    event.preventDefault(false)
    console.log("Form was submitted")
}

const Form = () => {
return (
    <form onClick={handleFormSubmit}>
        <input placeholder='write something' />
        <button>Submit</button>
    </form>
)
}

export default Form