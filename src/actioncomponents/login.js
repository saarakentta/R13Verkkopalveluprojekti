import { signal } from "@preact/signals-react";
import axios from "axios";
import React, { useState } from "react";

const token = signal('');

function Login() {

    console.log(token.value);

    const [username, setUsername] = useState('');
    const [pw, setPw] = useState('');

    function login() {
        axios.postForm('http://localhost:3001/login', {username, pw})
        .then(resp => token.value = resp.data.jwtToken)
        .catch(error => console.log(error.message))
    }

    return( 
        <div>
        <input value={username} onChange={ e => setUsername(e.target.value)}></input>
        <input value={pw} onChange={ e => setPw(e.target.value)}/>
        <button onClick={login}>Login</button>
        </div>

    )
  
}

export default Login;