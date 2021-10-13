import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import QuestionCardComponent from "./QuestionCardComponent";

export default function YourQuestionsComponet() {
  document.title = "Your Questions";
  const [ready, setReady] = useState(false);
  let arr = useSelector((state) => state.questionsList.values);
  let myUser = useSelector((state) => state.UserDetails.values);
  const [myQues, setMyQues] = useState([]);
  useEffect(() => {
    getMyQuestions();
  }, [arr]);

  const getMyQuestions = async () => {
    setReady(false);
    let myQuesList = [];
    if (arr) {
      myQuesList = arr.filter((item) => {
        return item.uid === myUser[0].uid;
      });
    }
    setReady(true);
    setMyQues(myQuesList);
  };

  return (
    <Container>
      <h1 className="text-center">Your Questions</h1>
      {myQues &&
        ready &&
        myQues.map((item) => (
          <QuestionCardComponent
            name={item.name}
            title={item.title}
            uid={item.uid}
          />
        ))}
    </Container>
  );
}
