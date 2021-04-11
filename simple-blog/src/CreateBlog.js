import firebase from "firebase";
import { useState } from "react";

function CreateBlog() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    const dbRef = firebase.database().ref();
    //create object containing person name, title, and content blog post as params
    dbRef.push({ person: name, writing: content, title: title });
    setName("");
    setContent("");
    setTitle("");
  };

  return (
    <div>
      <form className="blog-input" action="submit">
        <div className="blog-info">
          <div>
            <label htmlFor="title-input">Title</label>
            <input
              type="text"
              name="title-input"
              id="title-input"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div>
            <label htmlFor="name-input" aria-hidden="true">
              Name
            </label>
            <input
              type="text"
              id="name-input"
              name="name-input"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
        </div>

        <label htmlFor="content-input">Content</label>
        <textarea
          placeholder="write your blog here"
          id="content-input"
          name="content-input"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />

        <button id="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateBlog;
