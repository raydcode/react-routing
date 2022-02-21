import React from 'react';

import { useFetch } from '../../hooks';

import { useParams } from 'react-router-dom';

function Blogs() {
  const { id } = useParams();

  const { data } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  return (
    <div className="blog-details">
      Blogs details {id}
      <article>
        <h2>{data.title}</h2>
        <div>{data.body}</div>
      </article>
    </div>
  );
}

export default Blogs;
