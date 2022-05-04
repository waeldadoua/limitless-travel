import React from 'react';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';


const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/waeldadoua">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://de.linkedin.com/in/wael-dadoua-019285125">
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/waeldadoo/">
      <BsInstagram />
        
      </a>
    </div>
  </div>
);

export default SocialMedia;