import React, { useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { quesList } from "../store/features/AllQuestions";
import { DataBase } from "../config/firebase.config";

export default function QuestionCardComponent({ name, title, uid }) {
  const [Count, setCount] = useState(0);

  const dispatch = useDispatch();

  let user = useSelector((state) => state.UserDetails.values);

  let arr = useSelector((state) => state.questionsList.values);

  const [loading, setLoading] = useState(false);

  const updateDel = async () => {
    setLoading(true);
    arr = arr.filter((item) => item.title !== title);
    await DataBase.doc(`/allQuestions/${title}/quesData/ansDetails`).delete();
    await DataBase.doc(`/allQuestions/${title}/quesData/quesDetails`).delete();
    await DataBase.doc(`/allQuestions/${title}`).delete();
    dispatch(quesList({ arr }));
    setLoading(false);
  };

  return (
    <>
      <Container>
        <Container
          className="my-3"
          style={{ border: "2px solid black", borderRadius: "5%" }}
        >
          <Row className="my-3">
            <Col lg={11} md={11} sm={10} xl={11} xs={9} xxl={11}>
              <Card>
                <Card.Header>
                  <Container className="profileContainer">
                    <img src="./logo192.png" alt="." className="userIMG" />
                    <h4>{name}</h4>
                  </Container>
                </Card.Header>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Button variant="info" disable={loading}>
                    <Link
                      to={`/ques/${title}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Discuss
                    </Link>
                  </Button>
                  {uid === user[0].uid ? (
                    <>
                      <Button
                        variant="danger"
                        className="myBtns"
                        onClick={updateDel}
                        disable={loading}
                      >
                        Delete
                      </Button>
                    </>
                  ) : (
                    ""
                  )}
                </Card.Body>
              </Card>
            </Col>
            <Col lg={1} md={1} sm={2} xl={1} xs={3} xxl={1}>
              <Row
                className="triangle-up"
                style={{ borderBottom: "3em solid black" }}
                onClick={() => {
                  setCount(Count + 1);
                }}
              ></Row>
              <Row>
                <p className="noselect">{Count}</p>
              </Row>
              <Row
                className="triangle-down"
                style={{ borderTop: "3em solid black" }}
                onClick={() => {
                  setCount(Count - 1);
                }}
              ></Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
