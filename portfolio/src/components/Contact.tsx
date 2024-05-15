import React, { useState } from 'react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import './Contact.css';

const Contact: React.FC = () => {
  const [copyAlert, setCopyAlert] = useState("");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopyAlert("Copied!");
    setTimeout(() => {
      setCopyAlert("");
    }, 2000);
  };

  return (
    <div className='contact'>
      <h2> &lt;Contact&gt;</h2>
      <div className='contacts'>
        <p><FaGithub className='contact-icon'/>: <a href="https://github.com/Jzheng777" target="_blank" rel="noopener noreferrer" className='link'>Jzheng777</a></p>
        <p><FaLinkedinIn className='contact-icon'/>: <a href="https://www.linkedin.com/in/jason-zheng-b65b05266/" target="_blank" rel="noopener noreferrer" className='link'>Jason Zheng</a></p>
        <p onClick={() => copyToClipboard("jzheng700@gmail.com")} onMouseEnter={() => setCopyAlert("Copy")} onMouseLeave={() => setCopyAlert("")} className="copyable">
          <MdEmail className='contact-icon'/>: jzheng700@gmail.com
          {copyAlert && <span className="copy-alert">{copyAlert}</span>}
        </p>
        <p onClick={() => copyToClipboard("917-536-8187")} onMouseEnter={() => setCopyAlert("Copy")} onMouseLeave={() => setCopyAlert("")} className="copyable">
          <FaPhoneAlt className='contact-icon'/>: 917-536-8187
          {copyAlert && <span className="copy-alert">{copyAlert}</span>}
        </p>
      </div>
    </div>
  );
}

export default Contact;
