import React from 'react';
import './index.css'

interface VideoCardProps {
//   description: string;
//   onClick: () => void;
    col: number;
}

const VideoCard: React.FC<VideoCardProps> = ({col}) => {
  const thumbnail = "https://gachoitieuphong.com/wp-content/uploads/2024/10/cropped-LOGO-GA-CHOI-TIEU-PHONG-2-300x300.png";
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
        <h3>{title}</h3>
        <p>Co j dau ma hien thi</p>
      </div>
    </div>
  );
};

export default VideoCard;