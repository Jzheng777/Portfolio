import React from 'react';
import './Home.css'
import jason from "../pic/jason-z.jpg"

const Home: React.FC = () => {
  return (
    <div className='Home'>
            <div className='side-com'>
      <span> ——— Hello </span>
      <p className='intro'>I'm Jason Zheng.</p>
      <p className='body'>
        I recently graduated from the University of Buffalo with
        my BS in Computer Science and I am interested in Web Development and AI.
      </p>
      </div>
      <div className='center'>
        <h2>&lt;Home&gt;</h2>
        <img src={jason} alt="Jason Zheng" />
      </div>
    </div>
  );
}

export default Home;
