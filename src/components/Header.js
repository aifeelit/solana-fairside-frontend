import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../assets/imgs/Fairside.svg';
import discord from '../assets/imgs/Discord.svg';
import moon from '../assets/imgs/Crescent.svg';
import telegram from '../assets/imgs/Telegram.svg';
import twitter from '../assets/imgs/Twitter.svg';
import options from '../assets/imgs/OptionButtonTopRight.svg';
import '../assets/scss/header.scss';

const Header = () => {
  
  return (
    <>
        <nav id="navbar_top" className="navbar navbar-expand-lg navbar-light mb-3 mt-1">
            <Link to="/" className="navbar-brand">
                <img src={logo} className="logo" alt="Fairside" title="Fairside"/>
            </Link>

            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}

            <div className="navbar-collapse" id="navbarSocials">

                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a href="#" className="nav-link socials__href"><img className="nav__icons" src={telegram} alt="Telegram" title="Telegram" /></a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link socials__href"><img className="nav__icons" src={discord} alt="Discord" title="Discord" /></a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link socials__href"><img className="nav__icons" src={twitter} alt="Twitter" title="Twitter" /></a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link socials__href"><img className="nav__icons" src={options} alt="Options" title="Options" /></a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link socials__href"><img className="nav__icons" src={moon} alt="Drak mode" title="Drak mode" /></a>
                    </li>
                    <li className="nav-item li--connect">
                        <button className="btn btn-outline-primary">
                            Connect
                        </button>
                    </li>
                </ul>

            </div>

        </nav>

    </>


  );
}

export default Header;
