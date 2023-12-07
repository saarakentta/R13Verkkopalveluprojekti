import { useState } from "react"
import axios from "axios";
import { jwtToken } from "../components/signals/TokenSignal";

function Login() {

  const [username, setUsername] = useState("");
  const [pw, setPw] = useState("");

  function login() {
    axios
      .postForm("http://localhost:3001/login", { username, pw })
      .then((resp) => {
        jwtToken.value = resp.data.jwtToken;
        // Tyhjennä kentät kirjautumisen jälkeen
        setUsername("");
        setPw("");
      })
      .catch((error) => console.log(error.message));
  }
  
  return (
        <div>
          <h2>Kirjaudu sisään</h2>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <br />
          <input value={pw} onChange={(e) => setPw(e.target.value)} />
          <br />
          <button onClick={login}>Login</button>
        </div>
  );
}

export default Login;
