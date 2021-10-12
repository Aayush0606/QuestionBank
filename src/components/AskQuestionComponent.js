import React, { useState } from "react";
import { Button, Container, Form, FloatingLabel } from "react-bootstrap";
import { askQues } from "../store/features/AllQuestions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { DataBase } from "../config/firebase.config";

export default function AskQuestionComponent() {
  document.title = "Ask Questions";
  const history = useHistory();
  const [que, setQue] = useState("");
  const [des, setDes] = useState("");

  const dispatch = useDispatch();

  let user = useSelector((state) => state.UserDetails.values);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const arr = {
      name: user[0].name,
      title: que,
      description: des,
      uid: user[0].uid,
    };
    dispatch(askQues({ arr }));
    await DataBase.collection("allQuestions")
      .doc(que)
      .collection("quesData")
      .doc("quesDetails")
      .set({ arr }, { merge: true });
    history.push(`/ques/${que}`);
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
              required
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
              required
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
