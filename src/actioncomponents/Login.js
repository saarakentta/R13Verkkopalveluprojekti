import { useState } from "react";
import axios from "axios";
import { jwtToken } from "../components/signals/TokenSignal";

function Login() {
  const [username, setUsername] = useState("");
  const [pw, setPw] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);

  function login() {
    axios
      .postForm("http://localhost:3001/login", { username, pw })
      .then((resp) => {
        jwtToken.value = resp.data.jwtToken;
        // Tyhjennetään kentät kirjautumisen jälkeen
        setUsername("");
        setPw("");
        setLoginFailed(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoginFailed(true);
      });
  }

  return (
    <div className="login">
      <h2>Kirjaudu sisään</h2>
      <div>
        <label>Käyttäjätunnus:</label>
        <input
          className="inputlogin"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Käyttäjätunnus"
        ></input>
      </div>
      <div>
        <label>Salasana:</label>
        <input
          className="inputlogin"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          placeholder="Salasana"
        />
        <br />
        <button className="loginbutton" onClick={login}>
          Login
        </button>
      </div>
      {loginFailed && (
        <p style={{ color: "red" }}>
          Kirjautuminen epäonnistui. Tarkista käyttäjätunnus ja salasana.
        </p>
      )}
    </div>
  );
}

export default Login;
