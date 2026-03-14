import React, { useState } from "react";
import "./Login.css";
function Login({ onLogin }) {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [msg, setMsg] = useState("");

function handleLogin(){

if(username === "admin" && password === "1234"){
onLogin();
}else{
setMsg("Invalid Login");
}

}
return (

<div className="container">

<h2>Login</h2>

<input
type="text"
placeholder="Username"
value={username}
onChange={(e)=>setUsername(e.target.value)}
/>

<br/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<br/>

<button onClick={handleLogin}>Login</button>

<p>{msg}</p>

</div>

);

}

export default Login;