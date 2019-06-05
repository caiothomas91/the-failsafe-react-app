import React from 'react';

//App components

const Footer = () => (
    <footer className="text-center py-5">
        <a href="/contact#contact" className="d-inline-block mb-3 info-link">Contact</a>
        <p>&copy;2019 The Failsafe. All rights reserved. Site by Caio Thomas.</p>
        <section id="social" className="social-group d-flex justify-content-center">
            <a className="rounded-circle" href="https://facebook.com/thefailsafe" target="_blank">
                <img src="/img/social/facebook.svg" />
            </a>
            <a className="rounded-circle" href="https://instagram.com/wearethefailsafe/" target="_blank">
                <img src="/img/social/instagram.svg" />
            </a>
            <a className="rounded-circle" href="https://www.youtube.com/channel/UCGQ3kpWGaAAoLumbXaxBdNQ" target="_blank">
                <img src="/img/social/youtube.svg" />
            </a>
            <a className="rounded-circle" href="https://soundcloud.com/thefailsafe" target="_blank">
                <img src="/img/social/soundcloud.svg" />
            </a>
            <a className="rounded-circle" href="https://twitter.com/thefailsafeband" target="_blank">
                <img src="/img/social/twitter.svg" />
            </a>
            <a className="rounded-circle" href="https://reverbnation.com/wearethefailsafe" target="_blank">
                <img src="/img/social/reverbnation.png" />
            </a>
        </section>
    </footer>
);

export default Footer;