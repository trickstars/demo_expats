import { useEffect, useState } from "react";
import  './index.css';


function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Danh sách các ảnh mẫu
    const images = [
      'https://via.placeholder.com/800x400/ff7b7b/333333?text=Image+1',
      'https://via.placeholder.com/800x400/7bff7b/333333?text=Image+2',
      'https://via.placeholder.com/800x400/7b7bff/333333?text=Image+3',
      'https://via.placeholder.com/800x400/ffd27b/333333?text=Image+4',
    ];
  
    // Hàm chuyển sang ảnh tiếp theo
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    // Hàm chuyển sang ảnh trước đó
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    // Tự động chuyển ảnh sau mỗi 3 giây
    useEffect(() => {
      const interval = setInterval(nextSlide, 3000); // 3 giây
      return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
    }, [images.length]);


  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Di chuyển theo chiều ngang
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="carousel-image"
          />
        ))}
      </div>
      <div className="controls">
        <button className="prev" onClick={prevSlide}>
          &#10094; {/* Nút quay lại */}
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095; {/* Nút tiếp theo */}
        </button>
      </div>
    </div>
  );
}
export default Carousel;