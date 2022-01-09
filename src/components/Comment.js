import React from "react";

function Comment({commentsOn, comment}){
    console.log(commentsOn)
    
        return (
            <div style={{display: commentsOn ? "block" : "none"}}>
                <h4>{comment.user}</h4>
                <p>{comment.comment}</p>
            </div>
        )
    
   
    
}

export default Comment