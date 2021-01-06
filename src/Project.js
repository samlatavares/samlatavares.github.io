import React, { useEffect, useState } from 'react';
import './Project.css';
export default function Project(dados) {

  return <div id="projectDiv" className="project-card">
    <a href={dados.projectLink} target="_blank" className="project project-tile">
      <img className="project-image" src={dados.imgSrc} alt={dados.imgAlt} title={dados.tooltip} ></img>
      <p className="project-title">
        <span className="code">&lt;</span>
        {dados.projectTitle}
        <span className="code">&#47;&gt;</span>
      </p>
    </a>
  </div>;
}