import { useEffect, useRef, useState } from "react";
import VideoCard from "../VideoCard";
import './index.css'
import axios from "axios";

interface VideoMetadata {
    id: string;
    title: string;
    description: string;
    duration: number;
    upload_date: string;
    thumbnail: string;
    playback_url: string;

}

interface VideoListContainerProps {
    numCol: number;
}


const VideoListContainer:React.FC<VideoListContainerProps> = ({numCol}) => {
    const [listVideo, setListVideo] = useState<VideoMetadata[]>([]);

      // Hàm gọi API để lấy dữ liệu lịch sử chat
    const fetchListVideos = async () => {
        console.log(`Get list video metadata from server`);

        try {
            const response = await axios.get<{ contents: string }>(
                `https://api.allorigins.win/get?url=${encodeURIComponent('https://gachoiletuan.com/api/videos/metadata')}`,
                {
                    // params: {
                    //     start_index: startIndex,
                    //     end_index: endIndex,
                    // },
                // headers: {
                //   "Cache-Control": "no-cache, no-store, must-revalidate",
                //   Pragma: "no-cache",
                //   Expires: "0",
                // }
                }
            );
            const data = JSON.parse(response.data.contents);
            console.log('Data:', data);
            if (data.length > 0) {
                setListVideo(data);
            }
        } catch (error) {
        console.error('Có lỗi khi tải video:', error);
        } finally {
        // setLoading(false);
        }
    };

    // Sử dụng useEffect để gọi API khi component mount
    useEffect(() => {
        fetchListVideos();
    }, []);

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
            {listVideo.map((video) => (
                <VideoCard key={video.id} col={cols} 
                metadata={{id: video.id, title: video.title, description: video.description, playback_url: video.playback_url}}/>
            ))}
        </div>
    )
}

export default VideoListContainer;