import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Auth } from "../config/firebase.config";

export default function SignupComponent() {
  document.title = `SignUp`;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (pass === cpass) {
      try {
        await Auth.createUserWithEmailAndPassword(email, pass).then(
          (result) => {
            return result.user.updateProfile({
              displayName: name,
            });
          }
        );
        setShowAlert(false);
        setAlertMsg("");
        history.push("/");
      } catch (error) {
        setShowAlert(true);
        setAlertMsg(`OPSS!!!${error}`);
      }
    } else {
      setShowAlert(true);
      setAlertMsg("OPSS!!! Passwords don't match!");
    }
    setLoading(false);
  };

  const handleShow = () => {
    setShowPass(!showPass);
  };

  return (
    <>
      <div className="auth-wrapper" style={{ marginTop: "5em" }}>
        <div className="auth-inner">
          <h3>SignUp</h3>
          {showAlert && <Alert variant="danger">{alertMsg}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>User name</Form.Label>
              <Form.Control
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder="Enter your name"
                minLength="3"
                maxLength="10"
              />
            </Form.Group>
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
                minLength="5"
                maxLength="15"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="cpass">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                required
                value={cpass}
                onChange={(e) => {
                  setCpass(e.target.value);
                }}
                type={showPass ? "text" : "password"}
                placeholder="Confirm Password"
                minLength="5"
                maxLength="15"
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
                Already registered? <Link to="login">LogIn</Link>
              </Form.Text>
            </div>
            <div className="text-center">
              <Button variant="primary" type="submit" disabled={loading}>
                SignUp
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
