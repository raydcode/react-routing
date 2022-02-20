import React from 'react';

function List({ blogs, title, removePost }) {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog?.title}</h2>

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
