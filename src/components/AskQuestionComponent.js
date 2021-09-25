import React, { useState } from "react";
import { Button, Container, Form, FloatingLabel } from "react-bootstrap";
import { askQues } from "../store/features/AllQuestions";
import { useDispatch } from "react-redux";

export default function AskQuestionComponent() {
  const [que, setQue] = useState("");
  const [des, setDes] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const arr = { name: "Hello 2", title: que, description: des };
    dispatch(askQues({ arr }));
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
