import React from 'react';

//data
import { Socials } from '../../data/socials';

const SocialLinks = () => (
    <section className="social-group upper-social d-none d-sm-flex pt-2 pr-2 justify-content-end">
        {Socials.map( (social) => (
            <a className="rounded-circle" href={social.link} target="_blank" rel="noopener noreferrer">
                <img src={`../../img/social/${social.image}`} alt={social.alt} />
            </a>
        ))}
        {/* <a className="rounded-circle" href="https://instagram.com/wearethefailsafe/" target="_blank">
            <img src="../img/social/instagram.svg" />
        </a>
        <a className="rounded-circle" href="https://www.youtube.com/channel/UCGQ3kpWGaAAoLumbXaxBdNQ" target="_blank">
            <img src="../img/social/youtube.svg" />
        </a>
        <a className="rounded-circle" href="https://soundcloud.com/thefailsafe" target="_blank">
            <img src="../img/social/soundcloud.svg" />
        </a>
        <a className="rounded-circle" href="https://twitter.com/thefailsafeband" target="_blank">
            <img src="../img/social/twitter.svg" />
        </a>
        <a className="rounded-circle" href="https://reverbnation.com/wearethefailsafe" target="_blank">
            <img src="../img/social/reverbnation.png" />
        </a> */}
    </section>
);

export default SocialLinks;