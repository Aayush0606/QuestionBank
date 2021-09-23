import React, { useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

export default function QuestionCardComponent() {
  const [Count, setCount] = useState(0);

  return (
    <Container>
      <Container
        className="my-3"
        style={{ border: "2px solid black", borderRadius: "5%" }}
      >
        <Row className="my-3">
          <Col lg={11} md={11} sm={10} xl={11} xs={9} xxl={11}>
            <Card className="text-center">
              <Card.Header>Name</Card.Header>
              <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>Description</Card.Text>
                <Button variant="primary">Discuss</Button>
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
  );
}