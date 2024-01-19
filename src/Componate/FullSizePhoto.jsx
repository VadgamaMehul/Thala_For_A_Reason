// FullSizePhoto.js
// import { width } from "@mui/system";
import React from "react";


const FullSizePhoto = ({ desktopImage, mobileImage }) => {
  return (<>
    <img
      src={window.innerWidth >= 800 ? desktopImage : mobileImage}
      alt="Cover"
      style={{
        width:'100%',
        height:'100vh',
        opacity:'0.3'
      }}
      />
      <form 
      style={{
        
      }}
      >
        <input type='text'/>
      </form>
      </>
  );
};

export default FullSizePhoto;
