import { useEffect, useState } from "react";
import  './index.css';


function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Danh sách các ảnh mẫu
    const images = [
      'https://gachoitieuphong.com/wp-content/uploads/2024/10/cropped-LOGO-GA-CHOI-TIEU-PHONG-2-300x300.png',
      'https://gachoitieuphong.com/wp-content/uploads/2024/10/cropped-LOGO-GA-CHOI-TIEU-PHONG-2-300x300.png',
      'https://gachoitieuphong.com/wp-content/uploads/2024/10/cropped-LOGO-GA-CHOI-TIEU-PHONG-2-300x300.png',
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

    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }
  
    // Tự động chuyển ảnh sau mỗi 3 giây
    // useEffect(() => {
    //   const interval = setInterval(nextSlide, 10000); // 3 giây
    //   return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
    // }, [images.length]);


  return (
    <div className="carousel-container">
      <div className="carousel-slider">
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
            <button className="carousel-btn prev" onClick={prevSlide}>
                <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button className="carousel-btn next" onClick={nextSlide}>
                <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
    
      </div>
        {/* Indicators */}
        <div className="carousel-indicators">
            {images.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
            ))}
        </div>

    </div>
  );
}
export default Carousel;
