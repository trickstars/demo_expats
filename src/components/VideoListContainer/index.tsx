import VideoCard from "../VideoCard";
import './index.css'

interface VideoListContainerProps {
    numCol: number;
}
const VideoListContainer:React.FC<VideoListContainerProps> = ({numCol}) => {
    return (
        <div className="video-list">
            {Array.from({length: 10}).map((_, index) => (
                <VideoCard key={index} col={numCol}></VideoCard>
            ))}
        </div>
    )
}

export default VideoListContainer;