import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import QuestionCardComponent from "./QuestionCardComponent";

export default function YourQuestionsComponet() {
  document.title = "Your Questions";
  let arr = useSelector((state) => state.questionsList.values);
  useEffect(() => {
    getMyQuestions();
  }, []);

  const getMyQuestions = async () => {
    if (arr) {
      arr = arr.filter((item) => item.name === "Hello 2");
    }
    console.log(arr);
  };

  return (
    <Container>
      <h1 className="text-center">Your Questions</h1>
      {arr &&
        arr.map((item) => (
          <QuestionCardComponent name={item.name} title={item.title} />
        ))}
    </Container>
  );
}
