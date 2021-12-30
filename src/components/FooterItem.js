import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';


const FooterItem = ({path, logo, name}) => {

    const [active, setCurrPath] = useState('');
    
    return (
        <li 
        onClick={() => setCurrPath(path)} 
        className={`nav-item ${active == path && 'active'}`}
        >
            <NavLink exact activeClassName="active" to={path} className="nav-link footer--link">
                <img className="nav__icons me-2" src={logo} alt={name} title={name} />
                <span>{name}</span>
            </NavLink>
        </li>
    );
}

export default FooterItem;
