import React, {useState} from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        username: "",
        password: "",
    })

    // let handleNameChange = (Event) => {
    //     setFullName(Event.target.value)
    // }

    // let handleUsernameChange = (Event) => {
    //     setUsername(Event.target.value)
    // }


    let handleInputChange = (event) => {
        setFormData((currData) => {
            return{...currData, [event.target.name]: event.target.value}
        }
        )
    }

    let handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
        setFormData({
            fullname: "",
            username: "",
            password: "",
        })
    }
return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">FullName</label>
        <input 
            type="text" 
            placeholder='Enter Full Name'
            value={formData.fullname}
            id='fullname'
            name='fullname'
            onChange={handleInputChange}/>

        <label htmlFor="username">Username</label>
        <input 
            type="text" 
            placeholder='Enter username'
            value={formData.username}
            id='username'
            name='username'
            onChange={handleInputChange}/>

        <label htmlFor="password">Password</label>
        <input 
            type="text" 
            placeholder='Enter password'
            value={formData.password}
            id='password'
            name='password'
            onChange={handleInputChange}/>

        <button>Submit</button>
    </form>
)
}

export default Form