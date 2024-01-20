// CoverPhoto.js
import React, { useState, useRef } from 'react';
import { styled } from "@mui/system";
import { TextField, Button } from "@mui/material";
import "./CoverPhoto.css"; // Import the CSS file for styling
import Dhoni from "./Ms_Dhoni.jpg";
import Mobil from "./Mobile.jpg";
import danceAudio from "./Bole_jo_koyal.mp3"

const desktopDance = "https://i.pinimg.com/originals/86/dc/94/86dc9402d372cb78469a659e19c6174c.gif"
const coverMobiel = "https://media.tenor.com/DIrUjkTnopsAAAAM/dhoni-funny-dance-bole-jo-koyal-bago-me.gif";

const img1 = window.innerWidth >= 800 ? Dhoni : Mobil;
const img2 = window.innerWidth >= 800 ? desktopDance : coverMobiel;

const FormContainer = styled("div")({
  position: "absolute",
  top: "50%", // Center vertically
  left: "50%", // Center horizontally
  width:"70%",
  transform: "translate(-50%, -50%)", // Center the form
  padding: "2rem",
  backgroundColor: "rgba(255, 250, 255, 0.8)", // Semi-transparent white background
  borderRadius: "8px",
  textAlign: "center",
});

const CoverForm = ({onSubmit,onReset}) => {
  const [inputValue, setInputValue] = useState("");
  const [resultMessage, setResultMessage] = useState("");
  const audioRef = useRef(null);

  const playAudio = () => {
    audioRef.current.play();
  };

  const stopAudio = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  const handleReste = (event) => {
    event.preventDefault();
    onReset(img1);
    setResultMessage("");
    setInputValue("");
    stopAudio();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newCover = img2;

    // Check if the input is alphanumeric
    if (/^[0-9a-zA-Z]+$/.test(inputValue)) {
      // Calculate the sum of numbers or the length of the string
      const sumOrLength = inputValue.match(/\d+/g)
        ? inputValue
            .split("")
            .map((char) => (/[0-9]/.test(char) ? parseInt(char, 10) : 0))
            .reduce((acc, num) => acc + Number(num), 0)
        : inputValue.length;

      // Check if the sum or length is equal to 7
      if (sumOrLength === 7) {
        setResultMessage("Thala For A Reason");
        onSubmit(newCover);
        playAudio();
        return;
      } else {
        setResultMessage("You Are Not Thala For A Reason");
        onSubmit(img1)
        return;
      }
    }

    setResultMessage(""); // Reset the result message if the condition is not met
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Enter Name or BirthYear"
          autoComplete="off"
          variant="outlined"
          fullWidth
          margin="normal"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <audio ref={audioRef} src={danceAudio} />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{
            // float: "left",
            margin: "20px 10px 0",
          }}
        >
          Submit
        </Button>
        <Button
          type="reset"
          onClick={handleReste}
          variant="contained"
          color="primary"
          style={{
            // float: "right",
            margin: "20px 10px 0",

          }}
        >
          Reset
        </Button>
      </form>
      {resultMessage && <h1>{resultMessage}</h1>}
    </FormContainer>
  );
};


const CoverPhoto = () => {
  const [currentCoverPhoto, setCurrentCoverPhoto] = useState(img1);

  const handleFormSubmit = (newCoverPhoto) => {
    setCurrentCoverPhoto(newCoverPhoto);
  };

  const handleFormReset = (img1) => {
    setCurrentCoverPhoto(img1);
  }

  return (
    <div className="cover-container">
      <div className="cover-image">
        {/* Show desktop image for screens wider than 800px, and mobile image otherwise */}
        <img src={currentCoverPhoto} alt="Cover" />
        <CoverForm onSubmit={handleFormSubmit} onReset={handleFormReset}/>
      </div>
    </div>
  );
};

export default CoverPhoto;
