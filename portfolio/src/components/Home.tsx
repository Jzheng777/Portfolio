import React from 'react';
import './Home.css'
import jason from "../pic/jasonzheng.jpg"

const Home: React.FC = () => {
  return (
    <div className='Home'>
      <h2>&lt;Home&gt;</h2>
      <p>Welcome to my portfolio website!</p>
      <img src={jason} alt="Jason Zheng" />
    </div>
  );
}

export default Home;
