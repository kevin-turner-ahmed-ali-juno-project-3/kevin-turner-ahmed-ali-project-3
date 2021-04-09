import DisplayBlog from './DisplayBlog';
import CreateBlog from './CreateBlog';
import firebase from './firebase';

function App() {
  return (
    <div className="App">
      <h1>Simple Blog</h1>
      <DisplayBlog />
    </div>
  );
}

export default App;
