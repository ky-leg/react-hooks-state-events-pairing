import React from "react";

function Info({title, views, date, upvotes, downvotes, handleUpvote, handleDownvote}){

    return(
        <div>
            <h2>{title}</h2>
            <h5>{views}Views | Uploaded {date}</h5>
            <button onClick={handleUpvote}>{upvotes}👍</button> 
            <button onClick={handleDownvote}>{downvotes}👎</button> 
        </div>
    )
}

export default Info

