import React, { useEffect, useState } from "react";
import axios from "axios";

function GetFeedback() {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get("http://localhost:3001/contact/all");
        setFeedbackData(response.data);
      } catch (error) {
        console.error("Error fetching feedback:", error.message);
      }
    };

    fetchFeedback();
  }, []);

  return (
    <div>
      <h2>Asiakaspalautetta:</h2>
      <ul>
        {feedbackData.map((feedback, index) => (
          <li key={index}>
            <strong>{feedback.nickname}:</strong> {feedback.feedback_text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GetFeedback;
