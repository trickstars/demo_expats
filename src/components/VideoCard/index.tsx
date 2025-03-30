import React from 'react';
import './index.css'

interface VideoCardProps {
//   description: string;
//   onClick: () => void;
    col: number;
}

const VideoCard: React.FC<VideoCardProps> = ({col}) => {
  const thumbnail = "./imgs/thumbnail.jpg";
  const title = "Chua co";
  return (
    <div className="video-card" 
        style={{
            flexBasis: `calc(100% / ${col})`,
            flexShrink: 0
        }}
    >
      <img src={thumbnail} alt={title} className="thumbnail" />
      <div className="video-info">
        <h5>{title}</h5>
        <p>Co j dau ma hien thi</p>
      </div>
    </div>
  );
};

export default VideoCard;