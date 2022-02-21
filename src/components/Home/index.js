import React from 'react';
import List from '../List';

import {useFetch} from '../../hooks';

function Home() {

  const {data,setData} = useFetch('https://jsonplaceholder.typicode.com/posts')


  console.log(data);
  const removePost = (id) => {
    console.log(id);

    const filtredBlogs = data.filter((blog) => blog.id !== id);

    setData(filtredBlogs);
  };

  return (
    <div className="home">
      <List blogs={data} title={'All Posts'} removePost={removePost} />
    </div>
  );
}

export default Home;
