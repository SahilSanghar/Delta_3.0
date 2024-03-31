import React from 'react'
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required';
    } 

    if (!values.remark) {
        errors.remark = 'Required';
    }
    
    if (!values.rating) {
        errors.rating = 'Required';
    } 
    return errors;
}

const CommentsForm = ({addNewComment}) => {
    // const [formData, setFormData] = useState({
    //     username: "",
    //     remark: "",
    //     rating: 5,
    // })

    const formik = useFormik({
            initialValues: {
            username: '',
            remark: '',
            rating: 5,
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            
        },
    });

    // let handleInputChange = (event) => {
    //     setFormData((currData) => {
    //         return { ...currData, [event.target.name]: event.target.value }
    //     })
    // }

    // let handleSubmit = (event) => {
    //     console.log(formData)
    //     addNewComment(formData)
    //     event.preventDefault()
    //     setFormData({
    //         username: "",
    //         remark: "",
    //         rating: 5,
    //     })
    // }

return (
    <div>
        <h4>Give me comment!</h4>
        <form onSubmit={formik.handleSubmit}>

            <label htmlFor="username">Username</label>
            &nbsp;&nbsp;&nbsp;
            <input 
            type="text" 
            placeholder='username'  
            value={formik.values.username}
            name='username'
            id='username'
            onChange={formik.handleChange}/>
            {formik.errors.username ? <div>{formik.errors.username}</div> : null}
            <br /><br /><br /><br />

            <label htmlFor="remark">Remark</label>
            &nbsp;&nbsp;&nbsp;
            <textarea 
            value={formik.values.remark}
            placeholder='Write your remark'
            name='remark'
            id='remark'
            onChange={formik.handleChange}></textarea>
            {formik.errors.remark ? <div>{formik.errors.remark}</div> : null}
            <br /><br /><br /><br />

            <label htmlFor="rating">Rating</label>
            &nbsp;&nbsp;&nbsp;
            <input 
            type="number" 
            placeholder='rating' 
            min={1} 
            max={5} 
            value={formik.values.rating}
            name='rating'
            id='rating'
            onChange={formik.handleChange}/>
            {formik.errors.rating ? <div>{formik.errors.rating}</div> : null}
            <br /><br /><br /><br />

            <button type="submit">Add Comment</button>
        </form>
    </div>
)
}

export default CommentsForm