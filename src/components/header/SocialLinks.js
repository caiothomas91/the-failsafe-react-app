import React from 'react';
import { Image } from 'react-bootstrap';

//data
import { Socials } from '../../data/socials';

const SocialLinks = () => (
    <section className="social-group upper-social d-none d-sm-flex pt-2 pr-2 justify-content-end">
        {Socials.map( (social) => (
            <a className="rounded-circle" href={social.link} target="_blank" rel="noopener noreferrer">
                <Image src={social.image} alt={social.alt} roundedCircle />
            </a>
        ))}
    </section>
);

export default SocialLinks;