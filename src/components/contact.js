import React from "react";

const Contact = () => {
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

  return (
    <div style={contactContainerStyle}>
      <h2 style={headingStyle}>Yhteystiedot</h2>
      <p style={infoStyle}>Sähköposti: info@r13autokauppa.fi</p>
      <p style={infoStyle}>Puhelin: 040123123123</p>
      <p style={infoStyle}>Osoite: Autokaupantie 1, 90123 Oulu</p>
      <h2 style={headingStyle}>Jätä palautteesi</h2>
    </div>
  );
};

export default Contact;
