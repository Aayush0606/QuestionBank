import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import QuestionCardComponent from "./QuestionCardComponent";
import { quesList } from "../store/features/AllQuestions";
import { useDispatch } from "react-redux";

export default function HomeComponent() {
  document.title = `Home`;
  const dispatch = useDispatch();
  const arr = [
    {
      name: "Hello",
      title: "this is title",
    },
    {
      name: "Hello 2",
      title: "this is title 2",
    },
    {
      name: "Hello 3",
      title: "this is title 3",
    },
    {
      name: "Hello 4",
      title: "this is title 4",
    },
    {
      name: "Hello 5",
      title: "this is title 5",
    },
    {
      name: "Hello 2",
      title: "this is title 5",
    },
  ];

  useEffect(() => {
    setQuesList();
  }, [arr]);

  const setQuesList = async () => {
    dispatch(quesList({ arr }));
  };

  return (
    <Container>
      <h1 className="text-center my-4">All Questions</h1>
      {arr.map((item) => (
        <QuestionCardComponent name={item.name} title={item.title} />
      ))}
    </Container>
  );
}
