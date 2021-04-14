import firebase from "./firebase";
import { useState, useEffect } from "react";
import Comments from "./Comments";

function DisplayBlog() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    //variable that holds reference to database
    const dbRef = firebase.database().ref();

    //event listener that will fire every time there is a change in state
    //event listener that takes a callback which we use to get data from database
    dbRef.on("value", (response) => {
      //create variable to store the new state that we want to introduce to our app
      const newState = [];

      //store the response from our database ( using .val() to format correctly)
      const data = response.val();
      //iterate through the object, push each blog to the array
      for (let key in data) {
        newState.push({
          key: key,
          ...data[key],
          // comments: [],
        });
      }
      //call the setBlog function to update our component's state to be the new value
      setBlog(newState);
    });
  }, []);

  //remove blog post
  const removeBlog = (key) => {
    const dbRef = firebase.database().ref();
    dbRef.child(key).remove();
  };

  return (
    <div className="blog-container wrapper">
      {/* maps blog data into new array for displaying to page */}
      {blog.map((blogs, key) => {
        const comments = blogs.comments && Object.values(blogs.comments);

        return (
          <section className="blog-post" key={key}>
            <div className="blog-content">
              <h2>{blogs.title}</h2>
              <p>{blogs.writing}</p>
            </div>

            <div className="name">
              <h3>Written by: {blogs.person}</h3>
            </div>

            {comments && (
              <div className="blog-comment">
                <h3>Comments</h3>
                {comments.map((i, k) => (
                  <div className="blog-comment-item" key={k}>
                    <p>{i}</p>
                  </div>
                ))}
              </div>
            )}

            <Comments blog={blogs} />
            <button
              onClick={() => {
                removeBlog(blogs.key);
              }}
            >
              Delete
            </button>
          </section>
        );
      })}
    </div>
  );
}

export default DisplayBlog;
