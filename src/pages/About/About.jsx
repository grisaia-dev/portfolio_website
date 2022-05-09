import React from 'react';
import Loader from 'react-loaders';
import './About.scss';

const About = () => {
  return (
    <div className='about-page'>
      <h1 className='text-zone'>
        <p className='about'>About <p className='me'>me</p></p>
        <br/>
        I'm a beginner <p className='front'>front</p><p className='end'>end</p> developer. 
        <br/>
        I started my journey with the <p className='react'>React</p> framework. 
        <br/>
        So for now I will follow the developer's <p className='react'>React</p> branch.
        <br/>
        In the future, I want to become a <p className='full'>full</p>-<p className='stack'>stack</p> developer.
        <br/>
        For this I am looking for a job, and this site is my beginner portfolio
      </h1>
      <Loader type='triangle-skew-spin'/>
    </div>
  )
}
export default About;
