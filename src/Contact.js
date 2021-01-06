import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import './Contact.css';
export default function Contact() {
  return <div>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous"></link>
    <h1>Let's talk? <i class="fas fa-handshake"></i></h1>
    <p>If you wanna talk with me about jobs, some of my projects or anything else, these are my contacts.</p>
    <p>I'll be happy to talk to you.</p>
    <ul>
      <li><a href="mailto:samla_azevedo@outlook.com"><i class="fas fa-envelope" title="Mail"></i></a></li>
      <li><a href="https://www.linkedin.com/in/samla-tavares" target="_blank"><i class="fab fa-linkedin" title="Linkedin"></i></a></li>
      <li><a href="https://github.com/samlatavares" target="_blank"><i class="fab fa-github" title="Github"></i></a></li>
      <li><a href="https://www.freecodecamp.org/samla" target="_blank"><i class="fab fa-free-code-camp" title="FreeCodeCamp"></i></a></li>
      <li><a href="https://codepen.io/samlatavares" target="_blank"><i class="fab fa-codepen" title="CodePen"></i></a></li>
    </ul>
  </div>;
}