import React from 'react';
import List from '../List';

function Home() {
  const [blogs, setBlogs] = React.useState([
    {
      title: 'Welcome',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,',
      id: 1,
      author: 'Raydcode',
    },
    {
      title: 'ReactJs',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,',
      id: 2,
      author: 'Shamli',
    },
    {
      title: 'Javascript',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,',
      id: 3,
      author: 'Naveen',
    },
    {
      title: 'Css is Awesome',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,',
      id: 4,
      author: 'Naveen',
    },
  ]);

  const removePost = (id) => {
    console.log(id);

    const filtredBlogs = blogs.filter((blog) => blog.id !== id);

    setBlogs(filtredBlogs);
  };

  return (
    <div className="home">
      <List blogs={blogs} title={'All Posts'} removePost={removePost} />
    </div>
  );
}

export default Home;
