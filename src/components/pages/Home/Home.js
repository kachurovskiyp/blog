import { Link, useParams } from "react-router-dom";
import React from "react";

import Posts from "../../features/Posts/Posts";

function App() {
  const params = useParams();

  return (
    <React.Fragment>
      <div className="d-flex justify-content-between">
        <h3>{params.category ? params.category : 'All posts'}</h3>
        <Link to="/post/add" className="btn btn-outline-info">Add post</Link>
      </div>
      <div>
        {params.category ? <Posts category={params.category}/> : <Posts />}
      </div>
    </React.Fragment>
  );
}

export default App;