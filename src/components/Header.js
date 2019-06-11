import React from 'react';
import './../pages/Startpage.css';

const homeHeader = () =>

<nav>
<div className="nav-wrapper">
  {/*<a href="#" class="brand-logo"></a>*/}
  <ul id="nav-mobile" class="right hide-on-med-and-down">
    <li><a href="sass.html">Home</a></li>
    <li><a href="badges.html">About</a></li>
    <li><a href="collapsible.html">Resources</a></li>
  </ul>
</div>
</nav>;

export default homeHeader;

