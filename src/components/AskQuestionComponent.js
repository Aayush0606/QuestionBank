import React, { useState } from "react";
import { Button, Container, Form, FloatingLabel } from "react-bootstrap";

export default function AskQuestionComponent() {
  const [que, setQue] = useState("");
  const [des, setDes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(que, des);
  };

  return (
    <>
      <Container className="my-5">
        <Form onSubmit={handleSubmit}>
          <FloatingLabel
            controlId="floatingInput"
            label="Question Title"
            className="mb-3"
          >
            <Form.Control
              type="text"
              placeholder="Your question title"
              value={que}
              onChange={(e) => {
                setQue(e.target.value);
              }}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTextarea2"
            label="Question Description"
          >
            <Form.Control
              as="textarea"
              placeholder="Question Description"
              style={{ height: "10em" }}
              value={des}
              onChange={(e) => {
                setDes(e.target.value);
              }}
            />
          </FloatingLabel>
          <div className="text-center my-3">
            <Button variant="info" type="submit">
              Ask
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
}
