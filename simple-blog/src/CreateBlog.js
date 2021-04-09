import firebase from "firebase";
import { useState } from "react";

function CreateBlog() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    const dbRef = firebase.database().ref();
    dbRef.push({ person: name, writing: content });
  };

  return (
    <div>
      {/* 
                person creates a blog, attaches their name, that blog is sent to firebase
                create object containing person name and content of blog post as params
            
            */}

      <form action="submit">
        <label htmlFor="nameInput">Name</label>
        <input
          type="text"
          id="nameInput"
          onChange={(e) => setName(e.target.value)}
        ></input>

        <label htmlFor="contentInput">Content</label>
        <textarea
          id="contentInput"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <button id="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateBlog;
