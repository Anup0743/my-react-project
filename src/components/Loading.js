
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loading.css';
import loadingVideo from '../video/videoplayback.mp4'; // Adjust the path accordingly

const Loading = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const videoElement = videoRef.current;
    
    if (videoElement) {
      videoElement.play();

      const updateProgress = () => {
        const percentage = (videoElement.currentTime / videoElement.duration) * 100;
        setProgress(percentage);
      };

      videoElement.addEventListener('timeupdate', updateProgress);
      videoElement.addEventListener('ended', () => {
        navigate('/dashboard');
      });

      return () => {
        videoElement.removeEventListener('timeupdate', updateProgress);
        videoElement.removeEventListener('ended', () => {
          navigate('/dashboard');
        });
      };
    }
  }, [navigate]);

  return (
    <div className="loading-container loading-image">
      <div className="video-container">
      <video ref={videoRef} className="loading-video" src={loadingVideo} />
      <div className="progress-bar">
        <div className="progress-bar-fill " style={{ width: `${progress}%` }}></div>
      </div>
      </div>
    </div>
  );
};

export default Loading;
