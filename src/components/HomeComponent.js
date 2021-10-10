import React from "react";
import { Container } from "react-bootstrap";
import QuestionCardComponent from "./QuestionCardComponent";
import { useSelector } from "react-redux";

export default function HomeComponent() {
  document.title = `Home`;
  let arr = useSelector((state) => state.questionsList.values);

  return (
    <Container>
      <h1 className="text-center my-4">All Questions</h1>
      {arr &&
        arr.map((item) => (
          <QuestionCardComponent name={item.name} title={item.title} />
        ))}
    </Container>
  );
}
