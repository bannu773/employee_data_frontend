import React from 'react';
import { Link } from 'react-router-dom';
import './../App.css'

const CodeForInterview = () => {
  return (
    <div className='App'>
      Employee Data Management System
      <br />
      <br />
      <Link to="/all">
        <button>Go to All Users</button>
      </Link>
    </div>
  );
}

export default CodeForInterview;