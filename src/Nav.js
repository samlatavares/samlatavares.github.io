import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import './Nav.css';
export default function Nav() {
  return <div>
    <nav id="navbar">
      <ul>
        <li><a href="#homeDiv">Home</a></li>
        <li><a href="#aboutDiv">About</a></li>
        <li><a href="#projectsDiv">Projects</a></li>
        <li><a href="#contactDiv">Contact</a></li>
      </ul>
    </nav>
  </div>;
}