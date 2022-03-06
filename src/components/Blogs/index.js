import React from 'react';

import { useFetch } from '../../hooks';

import { useParams } from 'react-router-dom';

function Blogs() {
  const { id } = useParams();

  const { data } = useFetch(id);

  return (
    <div className="blog-details">
      <article>
        <h2>{data.title}</h2>
        <div>{data.content}</div>
      </article>
    </div>
  );
}

export default Blogs;
