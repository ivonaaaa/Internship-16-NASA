import React, { useState } from "react";

const withImageZoom = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props: P) => {
    const [isImageZoomed, setIsImageZoomed] = useState(false);
    const [zoomedImageUrl, setZoomedImageUrl] = useState<string>("");

    const handleImageClick = (imageUrl: string) => {
      setZoomedImageUrl(imageUrl);
      setIsImageZoomed(true);
    };

    const handleCloseZoom = () => {
      setIsImageZoomed(false);
      setZoomedImageUrl("");
    };

    return (
      <>
        <WrappedComponent {...props} onImageClick={handleImageClick} />

        {isImageZoomed && (
          <div className="zoomed-image-overlay">
            <div className="zoomed-image-container">
              <img src={zoomedImageUrl} alt="Zoomed" className="zoomed-image" />
              <button className="close-btn" onClick={handleCloseZoom}>
                Close
              </button>
            </div>
          </div>
        )}
      </>
    );
  };
};

export default withImageZoom;
