import React, { useState } from "react";

const Contact = () => {
  const [feedback, setFeedback] = useState(""); 
  const [feedbackSent, setFeedbackSent] = useState(false); 

  const contactContainerStyle = {
    maxWidth: "400px",
    margin: "auto",
    textAlign: "center",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f8f8f8",
  };

  const headingStyle = {
    color: "#333",
  };

  const infoStyle = {
    fontSize: "1.1em",
    marginBottom: "10px",
  };

  const feedbackInputStyle = {
    width: "100%",
    padding: "8px",
    boxSizing: "border-box",
    marginBottom: "10px",
  };

  const sendButtonStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 15px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const feedbackSentStyle = {
    color: "green",
    marginTop: "10px",
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
    setFeedbackSent(false); 
  };

  const handleSendButtonClick = () => {
   
    console.log("Feedback sent:", feedback);
    

    setFeedbackSent(true); 
    setFeedback(""); 
  };

  return (
    <div style={contactContainerStyle}>
      <h2 style={headingStyle}>Yhteystiedot</h2>
      <p style={infoStyle}>Sähköposti: info@r13autokauppa.fi</p>
      <p style={infoStyle}>Puhelin: 040123123123</p>
      <p style={infoStyle}>Osoite: Autokaupantie 1, 90123 Oulu</p>
      <h2 style={headingStyle}>Jätä palautteesi</h2>
      <textarea
        style={feedbackInputStyle}
        placeholder="Kirjoita palautteesi tähän..."
        value={feedback}
        onChange={handleFeedbackChange}
      />
      <button style={sendButtonStyle} onClick={handleSendButtonClick}>
        Lähetä
      </button>
      {feedbackSent && <p style={feedbackSentStyle}>Palaute lähetetty</p>}
    </div>
  );
};

export default Contact;