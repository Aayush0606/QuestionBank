import React from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import ViewQuestionComponent from "./ViewQuestionComponent";
import { useParams } from "react-router";
import AnswerComponent from "./AnswerComponent";

export default function DiscussCpmponent() {
  let arr = useSelector((state) => state.questionsList.values);
  const { id } = useParams();
  const specific = arr.filter((item) => item.title === id);
  return (
    <Container>
      <Container>
        <h1 className="text-center">Discuss Page</h1>
      </Container>
      <Container>
        {specific.map((item) => (
          <ViewQuestionComponent
            name={item.name}
            title={item.title}
            description={item.description}
          />
        ))}
      </Container>
      <Container>
        {arr.map((item) => (
          <AnswerComponent name={item.name} description={item.description} />
        ))}
      </Container>
    </Container>
  );
}
