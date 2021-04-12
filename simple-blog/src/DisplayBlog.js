import firebase from "firebase";
import { useState, useEffect } from "react";

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
          content: data[key],
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
        return (
          <section className="blog-post" key={key}>
            <div className="blog-content">
              <h2>{blogs.content.title}</h2>
              <p>{blogs.content.writing}</p>
            </div>
            <div className="name">
              <h3>{blogs.content.person}</h3>
            </div>
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
