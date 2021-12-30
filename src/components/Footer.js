import React from 'react';
import {NavLink} from 'react-router-dom';
import dashboard from '../assets/imgs/Dashboard.svg';
import stake from '../assets/imgs/Stake.svg';
import governance from '../assets/imgs/Governance.svg';
import membership from '../assets/imgs/Membership.svg';
import events from '../assets/imgs/Claims.svg';

import '../assets/scss/footer.scss';

const Footer = () => {

  const navArr = [
    { path: '/', logo: dashboard, title: 'Dashboard' },
    { path: '/stake', logo: stake, title: 'Stake' },
    { path: '/membership', logo: membership, title: 'Membership' },
    { path: '/events', logo: events, title: 'Events' },
    { path: '/governance', logo: governance, title: 'Governance' },
  ];

  return (
    <nav id="navbar_bottom" className="navbar fixed-bottom navbar-expand-lg navbar-light p-3 px-md-0">
        <div className="navbar-collapse">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {navArr.map((nav, index) => (
                <li key={index}>
                  <NavLink exact activeClassName="active" to={nav.path} className="nav-link footer--link bg-default">
                      <img className="nav__icons--footer me-0 me-lg-2" src={nav.logo} alt={nav.title} title={nav.title} />
                      <span>{nav.title}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
        </div>
    </nav>
  );
}

export default Footer;
