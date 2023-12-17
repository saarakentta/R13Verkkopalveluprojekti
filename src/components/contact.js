import React, { useState, useEffect } from "react";
import axios from "axios";
import GetFeedback from "../actioncomponents/GetFeedback";

function Contact() {
  const [nickname, setNickname] = useState("");
  const [feedback_text, setFeedback_text] = useState("");
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    // Tämä efekti suoritetaan, kun feedbackSent-muuttuja muuttuu
    if (feedbackSent) {
      // Haetaan palautteet tietokannasta ja päivitetään tila
      fetchFeedback();
    }
  }, [feedbackSent]);

  async function fetchFeedback() {
    try {
      const response = await axios.get("http://localhost:3001/contact/all");
      setFeedbackData(response.data);
    } catch (error) {
      console.error("Error fetching feedback.", error.message);
    } finally {
      setFeedbackSent(false);
    }
  }

  function feedback() {
    axios
      .post("http://localhost:3001/contact/add", { nickname, feedback_text })
      .then(async (resp) => {
        console.log("Feedback sent!");
        // Tyhjennä kentät kirjautumisen jälkeen
        setNickname("");
        setFeedback_text("");
        //Päivitä palautteet heti
        await fetchFeedback();
        setFeedbackSent(true);
        window.location.reload();
      })
      .catch((error) => console.log(error.message));
  }

  return (
    <div className="main-container">
      <div className="contact-container">
        <h2 className="heading">Yhteystiedot</h2>
        <p className="info">Sähköposti: info@r13autokauppa.fi</p>
        <p className="info">Puhelin: 040123123123</p>
        <p className="info">Osoite: Autokaupantie 1, 90123 Oulu</p>
        <h2 className="heading">Jätä palautteesi</h2>
        <label>Nimimerkki:</label>
        <input
          className="nickname-input"
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        ></input>
        <textarea
          className="feedback-input"
          placeholder="Kirjoita palautteesi tähän..."
          value={feedback_text}
          onChange={(e) => setFeedback_text(e.target.value)}
        />
        <button onClick={feedback}> Lähetä </button>
        {feedbackSent && <p className="feedback-sent">Palaute lähetetty</p>}
      </div>
      <GetFeedback feedbackData={feedbackData} />
    </div>
  );
}

export default Contact;
