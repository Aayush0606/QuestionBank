import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import QuestionCardComponent from "./QuestionCardComponent";

export default function YourQuestionsComponet() {
  let arr = useSelector((state) => state.questionsList);
  console.log(arr);
  return (
    <Container>
      <h1 className="text-center">Your Questions</h1>
    </Container>
  );
}
