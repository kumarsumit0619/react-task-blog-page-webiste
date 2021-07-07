import React from 'react'

const Posts = ({posts, loading }) => {
  if(loading){
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list-group mb-4" style={{backgroundColor:"red"}}>
    {posts.map(post => (
      <li key={post.id} className='list-group-item'
      style={{
        textIndent: 'center',
        textAlign:'justify',
        lineSpacing: '3px',
        backgroundColor: 'lightgray',
        padding: '8px',
        
      }}
      >
      {post.title}
      </li>
    ))}
    </ul>
  );
};

export default Posts
