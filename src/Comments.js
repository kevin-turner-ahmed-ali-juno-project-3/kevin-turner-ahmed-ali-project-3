import React, { useState } from "react";
import firebase from "./firebase";

const Comments = ({ blog }) => {
  const [commentInput, setComment] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const dbRef = firebase.database().ref().child(`/${blog.key}/comments`);
    let comment = dbRef.push();
    comment.set(commentInput);
    setComment("");
  };

  return (
    <div>
      <button onClick={handleClick}>add comment</button>

      <input
        type="text"
        name="blog-comment"
        id="blog-comment"
        placeholder="add comment"
        value={commentInput}
        onChange={(e) => setComment(e.target.value)}
      />
    </div>
  );
};

export default Comments;
