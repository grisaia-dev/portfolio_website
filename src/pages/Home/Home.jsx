import React from 'react';
import './Home.scss';

const Home = () => {
  return (
    <div className='home-page'>
      <div className='text-zone'>
        <h1>Hello everyone!</h1>
        <h1>I'm <strong>JateX.</strong></h1>
        <span>
          Beginner 
            <strong className='str1'> Front</strong>
            <strong className='str2'>end </strong> 
          developer.
        </span>
        <span>(<strong className='str3'>React</strong>)</span>
      </div>
    </div>
  )
}
export default Home;
