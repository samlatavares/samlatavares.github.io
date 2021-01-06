import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import './Home.css';
export default function Home() {
  return <div id="groupHome">
    <img id="photo" alt="Samla's photo." src="https://avatars2.githubusercontent.com/u/12777952?s=460&u=e9ec75495f60cece64ae6d579ee65c77a85edd68&v=4"></img>
    <div>
      <span class="spanHome">&lt; </span>
      <label id="nameLabel">Samla Azevedo Tavares</label>
      <span class="spanHome"> &#47;&gt;</span>
    </div>
  </div>;
}