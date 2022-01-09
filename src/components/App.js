import video from "../data/video.js";
import React, {useState} from "react";
import Comments from "./Comments";
import Info from "./Info";

function App() {
  // console.log("Here's your data:", video);
  const [commentsOn, setCommentsOn] = useState(true)
  const [upvotes, setUpvotes] = useState(video.upvotes)
  const [downvotes, setDownvote] = useState(video.downvotes)

  function leUpvote(){
    setUpvotes(upvotes+1)
  }

  function leDownvote(){
    setDownvote(downvotes+1)
  }

  function commentToggle(){
    setCommentsOn(!commentsOn)
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Info 
      title={video.title}
      views={video.views} 
      date={video.createdAt} 
      upvotes={upvotes} 
      downvotes={downvotes} 
      handleUpvote={leUpvote} 
      handleDownvote={leDownvote}/>
      <br></br>
      <Comments 
      commentsOn={commentsOn} 
      comments={video.comments}
      commentToggle={commentToggle}/>
    </div>
  );
}

export default App;
