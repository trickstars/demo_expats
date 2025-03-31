import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';

interface VideoMData {
  id: string,
  title: string;
  description: string;
  playback_url: string;
}

interface VideoCardProps {
    col: number;
    metadata: VideoMData
}

const VideoCard: React.FC<VideoCardProps> = ({col, metadata}) => {
  const thumbnail = "./imgs/thumbnail.jpg";
  const title = metadata.title;

  const handleClick = () => {
    sessionStorage.setItem(`video_${metadata.id}`, metadata.playback_url)
  }

  return (
    <div className="video-card" 
        style={{
            flexBasis: `calc(100% / ${col})`,
            flexShrink: 0
        }}
    >
      <Link to={`/videos/${metadata.id}`} onClick={handleClick}>
        <img src={thumbnail} alt={title} className="thumbnail" />
        <div className="video-info">
          <h5>{title}</h5>
          <p>{metadata.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;