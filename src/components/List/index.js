import React from 'react';

import { Link } from 'react-router-dom';

function List({ blogs, title, removePost }) {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blog/${blog.id}`}>
            <h2>{blog?.title}</h2>
          </Link>

          <button
            onClick={() => removePost(blog.id)}
            style={{ color: 'red', margin: '1em' }}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default List;
