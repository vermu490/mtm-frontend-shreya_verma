import React from 'react';
import './BackgroundVideo.css';

const BackgroundVideo = () => {
    return (
        <video autoPlay loop muted className="video-background">
            <source src={`${process.env.PUBLIC_URL}/background-video.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default BackgroundVideo;
