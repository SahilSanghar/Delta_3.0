import React, {useState} from 'react'

const LikeBtn = () => {
    const [isLiked, setIsLiked] = useState(false)
    const [clicks, setClicks] = useState(0)

    function toggleBtn() {
        setIsLiked(!isLiked)
        setClicks(clicks+1)
    }

    let likeStyle = { color: "red"}
return (
    <div>
        <p>Clicks = {clicks}</p>
        <p onClick={toggleBtn}>
        {isLiked ? (
            <i className="fa-solid fa-heart" style={likeStyle}></i>
        ) : (
            <i className="fa-regular fa-heart"></i>
        )}
        </p>
    </div>
)
}

export default LikeBtn