import React from 'react'
import { createPortal } from 'react-dom';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  
  for(let i=1; i<= Math.ceil(totalPosts / postsPerPage); i++){
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination' 
       
        >
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='#!' className='page-link' 
            style={{
              padding: '15px 32px',
              backgroundColor: 'green', 
              textAlign:'center',
              textDecoration: 'none',
              display: 'inline-block',
              margin: '4px 2px', 
              cursor: 'pointer',
              border: 'none',
              height: '10vh',
              width: '9.5vw',
              color: 'white',
            }}
            >
              {number}
            </a>
          </li>
        ))}
    </ul>
    </nav>
  );
};

export default Pagination;