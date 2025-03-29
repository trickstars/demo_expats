import { useEffect, useRef, useState } from "react";
import VideoCard from "../VideoCard";
import './index.css'

interface VideoListContainerProps {
    numCol: number;
}


const VideoListContainer:React.FC<VideoListContainerProps> = ({numCol}) => {
    const getNumColumns = (width: number) => {
        if (width <= 768) return 1;   // Mobile
        if (width <= 920) return 3;   // Laptop nhỏ, tablet ngang
        return numCol;                    // Desktop, Laptop lớn
      };

    const containerRef = useRef<HTMLDivElement>(null);
    const [cols, setNumCol] = useState(numCol); // Giá trị mặc định
    
    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
          if (!entries[0]?.contentRect) return;
          const { width } = entries[0].contentRect;
          setNumCol(getNumColumns(width));
        });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        // return () => {
        //     if (containerRef.current) {
        //         observer.unobserve(containerRef.current);
        //     }
        // };

        return () => observer.disconnect();
    }, []);

    return (
        <div className="video-list flex-container" ref={containerRef}>
            {Array.from({length: 10}).map((_, index) => (
                <VideoCard key={index} col={cols}></VideoCard>
            ))}
        </div>
    )
}

export default VideoListContainer;