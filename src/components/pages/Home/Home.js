import { Link } from "react-router-dom";
import React from "react";

import Posts from "../../features/Posts/Posts";

function App() {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-between">
        <h3>All posts</h3>
        <Link to="/post/add" className="btn btn-outline-info">Add post</Link>
      </div>
      <div>
        <Posts/>
      </div>
    </React.Fragment>
  );
}

export default App;