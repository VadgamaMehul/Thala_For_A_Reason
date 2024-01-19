
import React from "react";
import "./CoverPhoto.css"; 

const CoverPhoto = ({ desktopImage, mobileImage }) => {
  return (
    <div className="cover-container">
      <div className="cover-image">
        {/* Show desktop image for screens wider than 800px, and mobile image otherwise */}
        <img
          src={window.innerWidth >= 800 ? desktopImage : mobileImage}
          alt="Cover"
        />
      </div>
    </div>
  );
};

export default CoverPhoto;
