import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import QuestionCardComponent from "./QuestionCardComponent";

export default function YourQuestionsComponet() {
  let arr = useSelector((state) => state.questionsList.values);
  arr = arr.filter((item) => item.name === "Hello 2");
  console.log(arr);

  return (
    <Container>
      <h1 className="text-center">Your Questions</h1>
      {arr.map((item) => (
        <QuestionCardComponent name={item.name} title={item.title} />
      ))}
    </Container>
  );
}
