import { useState } from "react";
import axios from "axios";

function Register() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  function register() {

        // Tarkista, että salasanat ovat samat
        if (pw !== confirmPw) {
          console.log('Salasanat eivät täsmää.');
          setPasswordsMatch(false);
          return;
        }

    axios
      .postForm("http://localhost:3001/register", { fname, lname, username, pw })
      .then((resp) => {
    console.log('Registration successful');
    setPasswordsMatch(true);
    setRegistrationSuccess(true);
        // Tyhjennä kentät kirjautumisen jälkeen
        setFname("");
        setLname("");
        setUsername("");
        setPw("");
        setConfirmPw("");
      })
      .catch((error) => console.log(error.message));
      setRegistrationSuccess(false);
  }

  return (
    <div className="register">
    <h2>Rekisteröidy käyttäjäksi</h2>
    <div>
      <label>Etunimi:</label>
      <input className="inputregister"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
        placeholder="Etunimi"
      />
    </div>
    <div>
      <label>Sukunimi:</label>
      <input className="inputregister"
        value={lname}
        onChange={(e) => setLname(e.target.value)}
        placeholder="Sukunimi"
      />
    </div>
    <div>
      <label>Käyttäjänimi:</label>
      <input className="inputregister"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Käyttäjänimi"
      />
    </div>
    <div>
      <label>Salasana:</label>
      <input className="inputregister"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        type="password"
        placeholder="Salasana"
      />
    </div>
    <div>
        <label>Vahvista salasana:</label>
        <input className="inputregister"
          value={confirmPw}
          onChange={(e) => setConfirmPw(e.target.value)}
          type="password"
          placeholder="Vahvista salasana"
        />
      </div>
    <br/>
  
    {!passwordsMatch && (
      //virheviestit käyttäjälle
        <p style={{ color: 'red' }}>Salasanat eivät täsmää. Tarkista antamasi salasanat ja yritä uudelleen.</p>
      )}
      <br />
      <button onClick={register}>Rekisteröidy</button>

    {registrationSuccess && (
        <p style={{ color: 'green' }}>Rekisteröinti onnistui! Voit nyt kirjautua sisään.</p>
      )}
  </div>
);
}


export default Register;
