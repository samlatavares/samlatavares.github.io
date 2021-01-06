import React from 'react';
import './Projects.css';
import Project from './Project';

let srcTribute = process.env.PUBLIC_URL + '/tribute.jpg';
let altTribute = "Ada Lovelace's Photo";
let tooltipTribute = "Ada Lovelace's Tribute Page made for FreeCodeCamp Certification";
let projTitleTribute = "Ada Lovelace's Tribute Page";
let projLinkTribute = "https://github.com/samlatavares/tribute-page";

let srcDoc = process.env.PUBLIC_URL + '/technical-documentation.jpg';
let altDoc = "FlexBox Technical Documentation Page";
let tooltipDoc = "FlexBox Technical Documentation Page created for FreeCodeCamp Certification";
let projTitleDoc = "Flexbox Technical Documentation";
let projLinkDoc = "https://github.com/samlatavares/technical-documentation";

let srcUser = process.env.PUBLIC_URL + '/users-search.jpg';
let altUser = "Users Search Page";
let tooltipUser = "Challenge made during IGTI's Fullstack bootcamp. This project was developed using Javascript, HTML and CSS and shows a simple example of API consume. It's an application where the user can filter users that are returned by an public API.";
let projTitleUser = "Users Search";
let projLinkUser = "https://github.com/samlatavares/igti-fullstack-bootcamp-desafio-1";

export default function Projects() {
  return <div>
    <h1>Projects <i class="fas fa-laptop-code"></i></h1>
    <p>These are some of the projects I made during my training.</p>
    <div class="project-grid">
      <Project imgSrc={srcTribute} imgAlt={altTribute} imgTooltip={tooltipTribute} projectTitle={projTitleTribute} projectLink={projLinkTribute} />
      <Project imgSrc={srcDoc} imgAlt={altDoc} imgTooltip={tooltipDoc} projectTitle={projTitleDoc} projectLink={projLinkDoc} />
      <Project imgSrc={srcUser} imgAlt={altUser} imgTooltip={tooltipUser} projectTitle={projTitleUser} projectLink={projLinkUser} />
    </div>
    <a href="https://github.com/samlatavares/" target="_blank">
      <button id="projectsButton" ><i class="fas fa-eye"></i> View all</button>
    </a>
  </div>;
}