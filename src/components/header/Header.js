import React from 'react';
import { Navbar, Jumbotron } from 'react-bootstrap'

//App components
import LogoWhite from './LogoWhite';
import NavCollapse from './NavCollapse';
import SocialLinks from './SocialLinks';
import JumboLogo from './JumboLogo';

const Header = () => {
    return (
        <header>
            <Navbar collapseOnSelect expand="md" variant="dark" fixed="top"> 
                <LogoWhite />
                <Navbar.Toggle data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" />
                <NavCollapse />
            </Navbar>
            <Jumbotron fluid>
                <SocialLinks />
                <JumboLogo />
            </Jumbotron>    
        </header>
    );
}

export default Header;