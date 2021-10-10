import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Auth } from "../config/firebase.config";
import { useHistory } from "react-router-dom";

export default function LoginComopnent() {
  document.title = `Login`;
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const user = await Auth.signInWithEmailAndPassword(email, pass);
      setShowAlert(false);
      setAlertMsg("");
      history.push("/");
    } catch (error) {
      console.log(error);
      setShowAlert(true);
      setAlertMsg("Invalid credentials");
    }
    setLoading(false);
  };

  const handleShow = (e) => {
    setShowPass(!showPass);
  };

  return (
    <>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <h3>LogIn</h3>
          {showAlert && <Alert variant="danger">{alertMsg}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                value={pass}
                onChange={(e) => {
                  setPass(e.target.value);
                }}
                type={showPass ? "text" : "password"}
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Show password"
                onClick={handleShow}
              />
            </Form.Group>
            <div className="text-end mb-2">
              <Form.Text className="text-muted">
                New here? <Link to="signup">SignUp</Link>
              </Form.Text>
            </div>
            <div className="text-center">
              <Button variant="primary" type="submit" disabled={loading}>
                LogIn
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
