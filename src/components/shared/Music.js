import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

//data
import { SpotifyLink, AppleMusicLink, SoundCloudTracks } from '../../data/content';

const Music = () => (
    <Tabs defaultActiveKey="spotify" id="music" className="music">
        <Tab eventKey="spotify" title="Spotify">
            <iframe 
                title="Spotify Playlist"
                src={SpotifyLink}
                width="100%" 
                height="200" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media"
            />
        </Tab>
        <Tab eventKey="apple-music" title="Apple Music">
            <iframe
                title="Apple Music Playlist"
                allow="autoplay *; encrypted-media *;" 
                frameborder="0" 
                height="300"
                width="100%"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
                src={AppleMusicLink}
            />
        </Tab>
        <Tab eventKey="soundcloud" title="SoundCloud">
            { SoundCloudTracks.map((track) => (
                <iframe
                    title={track.title}
                    className="mb-3" 
                    width="100%" 
                    height="166" 
                    scrolling="no" 
                    frameborder="no" 
                    allow="autoplay" 
                    src={track.link}
                />
            ))}
        </Tab>
    </Tabs>
);

export default Music;