import React from "react";
import Comment from "./Comment"

function Comments({commentsOn, comments, commentToggle}){
    const commentList = comments.map((comment) => {
        return(
            <Comment key= {comment.id} commentsOn={commentsOn} comment={comment}/>
        )
    })
    return(
        <div> 
            <button onClick={commentToggle}>{commentsOn ? "Hide Comments" : "Show Comments"}</button> 
            <hr></hr>
            <h3>{comments.length} Comments</h3>
            {commentList}
        </div>
    )
}

export default Comments