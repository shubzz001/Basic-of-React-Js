import React, { useState, useRef, useEffect } from 'react';
import Video from './1860079-uhd_2560_1440_25fps.mp4';

const VideoRef = () => {
  const videoRef = useRef(null);
  const fullScreen = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false); 

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    fullScreen.current.fullscreen();
  }, [isPlaying]); 

  return (
<div
  style={{
    display: "flex",
    justifyContent: "center", 
    alignItems: "center", 
    height: "100vh", 
    flexDirection: "column",
  }}
>
  <video ref={videoRef} src={Video} height="500px" />
  <br />
  <button className="btn btn-danger" onClick={() => setIsPlaying(!isPlaying)}>
    {isPlaying ? "Pause ||" : "Play >"}
  </button>
  <button className="btn btn-primary" ref={fullScreen}>[]</button>
</div>
  );
};

export default VideoRef;
