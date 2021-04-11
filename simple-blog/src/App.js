import DisplayBlog from "./DisplayBlog";
import CreateBlog from "./CreateBlog";
import firebase from "./firebase";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <h1>Simple Blog</h1>
      <DisplayBlog />

      <CreateBlog />
    </div>
  );
}

export default App;
