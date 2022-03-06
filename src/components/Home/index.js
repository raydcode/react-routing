import React from 'react';
import List from '../List';

import { useFetch } from '../../hooks';

import { deleteDoc, doc, db } from '../../config';

function Home() {
  const { data, setData } = useFetch();

  const removePost = (id) => {
    console.log(id);

    const filtredBlogs = doc(db, 'posts', id);

    deleteDoc(filtredBlogs)
      .then(() => {})
      .catch((error) => {});
  };

  return (
    <div className="home">
      <List blogs={data} title={'All Posts'} removePost={removePost} />
    </div>
  );
}

export default Home;
