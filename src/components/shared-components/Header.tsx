import React from 'react';
import '../../style/Startpage.css';
import '../../style/materialize.css';

const Header = (): JSX.Element => (
  <nav>
    <div className="nav-wrapper">
      {' '}
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <a href="sass.html">Home</a>
        </li>
        <li>
          <a href="badges.html">About</a>
        </li>
        <li>
          <a href="collapsible.html">Resources</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
