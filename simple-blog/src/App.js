import DisplayBlog from "./DisplayBlog";
import CreateBlog from "./CreateBlog";
import "./App.css";


function App() {
  return (
    <div>
      <h1 className="wrapper">Simple Blog</h1>
      <DisplayBlog />

      <CreateBlog />

    <footer>Created at Juno College 2021</footer>
    </div>

  );
}

export default App;
