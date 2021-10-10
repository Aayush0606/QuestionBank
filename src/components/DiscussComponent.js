import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Container,
  Button,
  InputGroup,
  FormControl,
  Form,
} from "react-bootstrap";
import ViewQuestionComponent from "./ViewQuestionComponent";
import { useParams } from "react-router";
import AnswerComponent from "./AnswerComponent";

export default function DiscussCpmponent() {
  const [Ans, setAns] = useState("");
  let arr = useSelector((state) => state.questionsList.values);
  const [answer, setAnswer] = useState([]);
  const { id } = useParams();
  const specific = arr.filter((item) => item.title === id);

  const handleClick = async (e) => {
    e.preventDefault();
    const ansTest = {
      description: Ans,
      name: "Potato",
      title: "this is title 1",
    };
    setAnswer(answer.concat(ansTest));
    setAns("");
  };

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
        <h1>Ans</h1>
      </Container>
      <Container>
        {answer.map((item) => (
          <AnswerComponent name={item.name} description={item.description} />
        ))}
      </Container>
      <Container>
        <Form onSubmit={handleClick}>
          <InputGroup size="lg" className="mb-3">
            <FormControl
              required
              as="textarea"
              value={Ans}
              placeholder="Your answer"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={(e) => {
                setAns(e.target.value);
              }}
            />
            <Button
              type="submit"
              variant="outline-secondary"
              id="button-addon2"
            >
              Answer
            </Button>
          </InputGroup>
        </Form>
      </Container>
    </Container>
  );
}
