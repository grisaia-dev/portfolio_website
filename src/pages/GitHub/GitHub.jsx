import React from 'react';
import Loader from 'react-loaders';
import './GitHub.scss';
import '../../assets/vite.svg'

const GitHub = () => {
  return (
    <div className='about-site'>
      <h1 className='text-zone'>
        In this project, I used the following technologies:
        <br/>
        <p className='vite'>Vite</p>
        <br/>
        <p className='react'>React</p>
        <br/>
        <p className='fortAwesome'>FortAwesome</p>
        <br/>
        <p className='loadersCss'>ReactLoaders</p>
        <br/>
        <p className='animateCss'>Animate.css</p>
        <br/>
        <p className='sCss'>Scss</p>
      </h1>
      <Loader type='triangle-skew-spin'/>
    </div>
  )
}
export default GitHub;
