import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/perfil/sdadsas">
                    <img src="/nasa.png" alt="" />
                </Link>
            </li>
            <li>
                <Link to="/spacex">
                    <img src="/spacex.png" alt="" />
                </Link>
            </li>
            <li>
                <Link to="/roscosmos">
                    <img src="/roscosmos.png" alt="" />
                </Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;
