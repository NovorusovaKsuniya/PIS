import { useState } from 'react';
import './App.css';
import React from "react";

function App() {
const [x,y] = useState(0);
let b = 0;
  if (x === -1)
    x = b;

  return ( 
  <div>
    <nav class = "navbar background">
      <ul class="nav-list">
        <div class = "logo">
          <img src='./logo192.png'/>
    </div>
    <li>
      <a href='/Shoping'>Shoping</a>
    </li>
    <li>
      <a href='/Save'>Save</a>
    </li>
  </ul>
  <div clas = 'Test'>
    <input
    type='text'
    name='Search'
    id='Search'
    />
    <button class = "btn btn-sm">Search</button>
</div>
</nav>
<section clas = 'section'>
  <div clas = 'box-main'>
    <div clas = 'Beginig'>
      <h1 class = 'Text'>
        This is for Test
      </h1>
      <p clas = 'TextMain'>
        <img src='./logo192.png'/>
        <p>{x}</p>
        <button class = 'Add' onClick={() => y (x+1)}>add</button>
        <button class = 'Remove' onClick={() => y (x-1)}>remove</button>
        <button class='Save'onClick={() => y (x === 0)}>save</button>
        <p>This is a test</p>
        </p>
</div>
</div>
</section>
<section clas = 'section'>
  <div clas = 'box-main'>
    <div clas = 'Beginig1'>
      <h1 class = 'Text' id = 'Main'>
        This is for Test
      </h1>
      <p clas = 'TextMain'>
        This is test
        </p>
</div>
</div>
</section>
</div>

  )
}

export default App;
