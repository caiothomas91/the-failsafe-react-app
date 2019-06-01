import React from 'react';
import { Navbar } from 'react-bootstrap';

//Resources
import logoWhite from '../../img/logos/logo-white.png';

const LogoWhite = () => (
    <Navbar.Brand href="/">
        <img height="35px" src={logoWhite} alt="The Failsafe Logo" />
    </Navbar.Brand>
);

export default LogoWhite;