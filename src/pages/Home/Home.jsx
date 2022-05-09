import { faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Loader from 'react-loaders';
import './Home.scss';

const Home = () => {
  return (
    <div className='home-page'>
      <div className='text-zone'>
        <h1>
          Hello everyone!
          <br/>
          I'm <p className='name'>JateX.</p>
          <br/>
          Beginner <p className='front'>Front</p><p className='end'>end</p> developer.
          <br/>
          <p className='react'>React</p> in my arsenal.
          <br/>
          Presently :)
        </h1>
      </div>
      <FontAwesomeIcon className='react-icon' icon={faReact}/>
      <Loader type='triangle-skew-spin'/>
    </div>
  )
}
export default Home;
