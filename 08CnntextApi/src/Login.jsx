import React from "react";
import { useContext } from "react";
import { useState } from "react";
import UserContext from "./Context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser}=useContext(UserContext)

  return (
    <div>
      <h3>Login</h3>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Username..."
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password..."
        style={{ marginLeft: "20px" }}
      />
      <button
        style={{ marginLeft: "20px" }}
        onClick={(e) => {
          e.preventDefault();
          setUser({ username, password });
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
