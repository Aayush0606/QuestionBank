import React, { useEffect, useState } from "react";
import { Container, Form, FormControl, Button } from "react-bootstrap";
import QuestionCardComponent from "./QuestionCardComponent";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { quesList } from "../store/features/AllQuestions";

export default function HomeComponent() {
  document.title = `Home`;
  let arr = useSelector((state) => state.questionsList.values);
  const [myArr, setMyarr] = useState(arr);

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    const toFilter = e.target.value;
    const test = arr.filter((item) => item.title.includes(toFilter));
    setMyarr(test);
  };

  useEffect(() => {
    setMyarr(arr);
  }, [arr]);

  return (
    <Container>
      <h1 className="text-center my-4">All Questions</h1>
      <Form className="d-flex">
        <FormControl
          type="search"
          className="mr-2"
          aria-label="Search"
          value={search}
          onChange={handleChange}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      {myArr &&
        myArr.map((item) => (
          <QuestionCardComponent
            name={item.name}
            title={item.title}
            uid={item.uid}
          />
        ))}
    </Container>
  );
}
