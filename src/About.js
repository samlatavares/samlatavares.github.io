import React from 'react';
import './About.css';

export default function About() {
  return <div>
    <h1>About me <i class="far fa-smile-beam"></i></h1>
    <div id="aboutPDiv">
      <p><i class="fas fa-globe-americas"></i> I'm a brazilian developer.</p>
      <p><i class="fas fa-graduation-cap"></i> I'm graduated in Computer Science.</p>
      <p><i class="fas fa-users"></i> I like team work and document processes.</p>
      <p><i class="fas fa-user-edit"></i> I'm always improving soft and hard skills.</p>
      <p><i class="fas fa-laptop"></i> My main stack is C#/.Net but I'm currently working with Java.</p>
      <p><i class="fas fa-binoculars"></i> If you want to know what I'm studying now you can check in my Github or text me (please check the <a href="#contactDiv">contact session</a> ).</p>
      <p><i class="fas fa-globe"></i> My native language it's Portuguese, I'm an English intermediate speaker, Spanish beginner speaker and I'm studying Germany by myself.</p>
      <p><i class="fas fa-gamepad"></i> Some hobbies: Watch movies and TV series, eat, cooking, read, learn languages, listen to music, learn to draw, and sometimes play games.</p>
    </div>
  </div>;
}