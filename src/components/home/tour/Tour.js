import React from 'react';

//App components

//Resources
import bandsintownLogo from '../../../img/social/bandsintown.svg';

const Tour = () => (
    [   
        <div id="tour" />,
        <div className="bg-1">
            <div className="container px-3 py-5">
                <h3 className="text-center pb-3">Tour</h3>
                <div className="shows my-4 text-center">
                    <iframe 
                        className="d-block mx-auto mb-3" 
                        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fthefailsafe%2Fvideos%2F411822992988767%2F" 
                        scrolling="no" 
                        frameborder="0" 
                        allowTransparency="true" 
                        allowFullScreen="true"
                    />
                    <h4 className="text-center py-4">Dates</h4>              
                    <p>
                        <a className="my-3" target="_blank" href="https://www.facebook.com/events/570103950069651/">June 15 - Boggs' Hull Avenue Tavern - Des Moines, IA</a>   
                    </p>
                    <p>
                        <a className="my-3" target="_blank" href="https://www.facebook.com/events/1336706866467125/">June 28 - Hijynx - Fort Atkinson, WI</a>   
                    </p>
                    <p>
                        <a className="my-3" target="_blank" href="https://www.facebook.com/events/431229777649886/">August 3 - The Crucible - Madison, WI</a>   
                    </p>
                </div>
                <p className="text-center mt-5 blurb">Like us on Facebook to keep track of our upcoming shows!</p>
                <iframe 
                    className="d-block mx-auto" 
                    src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fthefailsafe%2F&width=122&layout=button&action=like&size=large&show_faces=true&share=true&height=65&appId" 
                    width="122" 
                    height="65" 
                    scrolling="no" 
                    frameborder="0" 
                    allowTransparency="true" 
                    allow="encrypted-media"
                />
                <p className="text-center blurb">Track us on bandsintown!</p>
                <button type="button" className="btn btn-track btn-lg d-block mx-auto">
                    <a href="https://www.bandsintown.com/a/168190" target="_blank">
                        <img className="bandsintown-icon" src={bandsintownLogo} />
                        <span>Track</span>
                    </a>
                </button>
            </div>
        </div>
    ]
);

export default Tour;