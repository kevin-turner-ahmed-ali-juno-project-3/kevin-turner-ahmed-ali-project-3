import firebase from 'firebase';
import {useState, useEffect} from 'react';

function DisplayBlog() {
    
    const [blog, setBlog] = useState([]);

    useEffect( () => {
        //variable that holds reference to database
        const dbRef = firebase.database().ref();
    
        //event listener that will fire every time there is a change in state
        //event listener that takes a callback which we use to get data from database
        dbRef.on('value', (response) => {
          //create variable to store the new state that we want to introduce to our app
          const newState= [];
   
          //store the response from our database ( using .val() to format correctly)
          const data = response.val();
          //iterate through the object, push each blog to the array
          for(let key in data) {
            newState.push({
              key: key,
              content: data[key]
            });
          }
          //call the setBlog function to update our component's state to be the new value
          setBlog(newState);
        });

      }, [])

      const removeBlog = (key) => {
        const dbRef = firebase.database().ref();
        dbRef.child(key).remove();
      }

    return (
      <div> 
      {/* allows object to load from firebase before attempting to render to page */}
      {/* {blog[0] && <p>the name is: {blog[0].content.person} and the content is: {blog[0].content.writing}</  */}
            
      {/* prints blog posts to page from firebase */}
      {
        blog.map((blogs, key) => {
          return (
            <section className="blog-post" key={key}>
              <div className="blog-content">
                <h1>{blogs.content.title}</h1>
                <p>{blogs.content.writing}</p>
              </div>
              <div className="name">
                <h3>{blogs.content.person}</h3>
              </div>
              <button onClick={ () => {
                removeBlog(blogs.key)
              }}>Delete</button>
            </section>
            
          )
        })
      }
      
      </div>
    )
}

export default DisplayBlog;

