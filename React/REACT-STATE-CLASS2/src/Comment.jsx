import React, {useState} from 'react'
import CommentsForm from './CommentsForm' 
import './Comments.css'

const Comment = () => {
    const [Comments, setComments] = useState([
        {
            username: "thats.__.sahil",
            remarks: "Great Job!",
            rating: 4,
        },
    ])

    let addNewComment = (Comment) => {
        setComments((currComments) => [...currComments, Comment])
        console.log("Added new comments")
    }

return (
    <>
    <div>
        <h3>All Comments</h3>
        {Comments.map((Comment, idx) => (
            <div className="comment" key={idx}>
            <span>{Comment.remarks}</span>
            &nbsp;
            <span>(rating: {Comment.rating})</span>
            <p>~ {Comment.username}</p>
        </div>
        ))}
    </div>
    <br /><hr />
    <CommentsForm addNewComment={addNewComment}/>
    </>
)
}

export default Comment