import React from 'react';

function Header() {
  return (
    <nav className="navbar">
      <h1>ray-D-blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          style={{
            backgroundColor: '#f23',
            borderRadius: '10px',
            color: '#fff',
            margin: '.5em',
            fontWeight: 'bold'
          }}
        >
          Create A Post
        </a>
      </div>
    </nav>
  );
}

export default Header;
