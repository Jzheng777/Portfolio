import React from 'react';
import './Project.css'
import powerChess from '../pic/power-chess.png'
import teamUp from '../pic/TeamUp.png'
import bottomHat from '../pic/bottom-hat.png'

const Projects: React.FC = () => {
  return (
    <div className='project'>
      <h2>&lt;Project&gt;</h2>
      <div className='project-wrap'><img src={powerChess} alt="Power-Chess-Image" />
        <div className='text'>
        <a href="https://www-student.cse.buffalo.edu/CSE442-542/2024-Spring/cse-442ad/dist/#/" target="_blank" rel="noopener noreferrer" className="project-link">
          <span className="project-name">*Power Chess*</span> </a>
          <p> Created a multiplayer Chinese Chess web application
        that you can play with friends, randoms, or even solo!</p>
        <p><b>Tech stack:</b> Vite, Php, MySQL, Apache</p>
        </div>
      </div>
      <div className='project-wrap'><img src={teamUp} alt="Team-Up-Image" />
        <div className='text'>
        <a href="https://webdev.cse.buffalo.edu/hci/teams/ok/" target="_blank" rel="noopener noreferrer" className="project-link">
          <span className="project-name">*Team Up*</span> </a>
          <p> A gaming forum that displays the top 5 streamers of specific games that you choose.
          There is a level and ranking system called xp that correlates to the likes you have in total for your posts.
          You can also find other players that play the same games as you.</p>
          <p><b>Tech stack:</b> React, Twitch API, MySQL, Php</p>
        </div>
      </div>
       <div className='project-wrap'><img src={bottomHat} alt="Bottom-Hat-Image" />
        <div className='text'>
        <a href="https://bottomhat.net/" target="_blank" rel="noopener noreferrer" className="project-link">
          <span className="project-name">*Bottom Hat*</span></a>
          <p>A quiz creation/maker web application where you can make your own
          quizzes and time limit or you can answer other people's quiz questions.</p>
          <p><b>Tech stack:</b> Bootstrap, Flask-Python, Socket.io, Nginx, Docker, MongoDB</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
