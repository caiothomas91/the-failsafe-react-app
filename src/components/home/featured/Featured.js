import React from 'react';
import { Container } from 'react-bootstrap';

//App components
import Youtube from './Youtube';
import Music from './Music';

const Featured = () => (
    [
        <div id="featured" />,
        <Container as="div">
            <section class="mb-5">
                <h3 class="text-center mb-md-3 mb-xl-5">Featured</h3>
                <Youtube />
                <Music />
            </section>
        </Container>
    ]
);

export default Featured;