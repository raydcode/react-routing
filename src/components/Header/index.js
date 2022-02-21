import React from 'react';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar">
      <h1>ray-D-blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            backgroundColor: '#f23',
            borderRadius: '10px',
            color: '#fff',
            margin: '.5em',
            fontWeight: 'bold',
          }}
        >
          Create A Post
        </Link>
      </div>
    </nav>
  );
}

export default Header;
