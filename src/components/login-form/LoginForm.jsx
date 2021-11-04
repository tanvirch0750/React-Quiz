import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Button from "../button/Button";
import Form from "../form/Form";
import TextInput from "../text-input/TextInput";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const history = useHistory();

  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    // validation
    //  if (password !== confirmPassword) {
    //    return setError("Password don't match");
    //  }

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      history.push("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError("Failed to login");
    }
  }

  return (
    <Form style={{ height: "330px" }} action="#" onSubmit={handleSubmit}>
      <TextInput
        type="email"
        placeholder="Enter email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <TextInput
        type="password"
        placeholder="Enter Password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <Button disabled={loading} type="submit">
        <span>Login</span>
      </Button>

      {error && <p className="error">{error}</p>}

      <div className="info">
        Don't have an account? <Link to="/signup">Signup</Link> instead.
      </div>
    </Form>
  );
}
