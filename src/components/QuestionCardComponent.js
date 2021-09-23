import React, { useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function QuestionCardComponent({ name, title }) {
  const [Count, setCount] = useState(0);

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
                  <Button variant="info">
                    <Link
                      to="/ques"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Discuss
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={1} md={1} sm={2} xl={1} xs={3} xxl={1}>
              <Row
                className="triangle-up"
                onClick={() => {
                  setCount(Count + 1);
                }}
              ></Row>
              <Row>
                <p className="noselect">{Count}</p>
              </Row>
              <Row
                className="triangle-down"
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
