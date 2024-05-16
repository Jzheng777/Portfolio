import React from 'react';
import './About.css'

const About: React.FC = () => {
  return (
    <div className='About'>
      <h2>&lt;About Me&gt;</h2>
      <div className='para'>
      <p>Hello! I'm Jason Zheng, a recent Computer Science graduate from the University at Buffalo. 
        Specializing in web development, AI, and game design, I led a team to create Power Chess, 
        a dynamic Chinese chess website. Handling everything from front-end development to deployment.
        I also explored the world of AI and implemented Sarsa and Q-learning algorithms for pathfinding optimization on an environment.</p>

        <p>Expanding further, I collaborated on a team to launch a gaming forum called Team Up 
          with an XP-based ranking system, correlating XP with post likes to foster community engagement.
          Moreover, users can seamlessly connect with like-minded gamers, fostering camaraderie. 
          I have experience in Python, JavaScript, and various web development tools, 
          I'm passionate about leveraging technology for impactful innovations. 
          I'm excited to connect with like-minded individuals and organizations for collaboration and technological advancement.</p>

      </div>
    </div>
  );
}

export default About;
