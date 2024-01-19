// CoverPhoto.js
import React from "react";
import { styled } from "@mui/system";
import {TextField, Button } from "@mui/material";
import "./CoverPhoto.css"; // Import the CSS file for styling
import { useState } from "react";

const FormContainer = styled("div")({
  position: "absolute",
  top: "50%", // Center vertically
  left: "50%", // Center horizontally
  transform: "translate(-50%, -50%)", // Center the form
  padding: "2rem",
  backgroundColor: "rgba(255, 250, 255, 0.8)", // Semi-transparent white background
  borderRadius: "8px",
  textAlign: "center",
});

const CoverForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [resultMessage, setResultMessage] = useState("");

  const handleReste = (event) => {
    event.preventDefault();
    setResultMessage("");
    setInputValue("");
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the input is alphanumeric
    if (/^[0-9a-zA-Z]+$/.test(inputValue)) {
      // Calculate the sum of numbers or the length of the string
      const sumOrLength = inputValue.match(/\d+/g)
        ? inputValue.split("").map((char) => (/[0-9]/.test(char) ? parseInt(char, 10) : 0)).reduce((acc, num) => acc + Number(num), 0)
        : inputValue.length;

      // Check if the sum or length is equal to 7
      if (sumOrLength === 7) {
        setResultMessage("Thala For A Reason");
        return;
      }

      else{
        setResultMessage("You Are Not Thala For A Reason");
        return;
      }

    }

    setResultMessage(""); // Reset the result message if the condition is not met
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Enter Name or BirhDate"
          autoComplete="off"
          variant="outlined"
          fullWidth
          margin="normal"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" 
        style={{
            // float: "left",
            margin:'20px 10px 0'
        }}
        >
          Submit
        </Button>
        <Button type="reset" onClick={handleReste} variant="contained" color="primary"
        style={{
            // float: "right",
            margin:'20px 10px 0'
        }}
        >
          Reset
        </Button>
      </form>
      {resultMessage && <p>{resultMessage}</p>}
    </FormContainer>
  );
};


const CoverPhoto = ({ desktopImage, mobileImage }) => {
  return (
    <div className="cover-container">
      <div className="cover-image">
        {/* Show desktop image for screens wider than 800px, and mobile image otherwise */}
        <img
          src={window.innerWidth >= 800 ? desktopImage : mobileImage}
          alt="Cover"
        />
        <CoverForm />
      </div>
    </div>
  );
};

export default CoverPhoto;
