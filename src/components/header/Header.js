import React from 'react';
import { Navbar, Jumbotron } from 'react-bootstrap'

//App components
import LogoWhite from './LogoWhite';
import NavCollapse from './NavCollapse';
import SocialLinks from './SocialLinks';

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
                
            </Jumbotron>    
            {/* <div className="jumbotron jumbotron-fluid">

                <div className="container text-center pb-md-5">
                    <img id="jumbo-logo" className="img-fluid" src="../img/logos/logo-black.svg" />
                </div>
            </div> */}
        </header>
    );
}

export default Header;