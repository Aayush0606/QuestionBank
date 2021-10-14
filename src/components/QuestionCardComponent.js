import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { quesList } from "../store/features/AllQuestions";
import { DataBase } from "../config/firebase.config";

export default function QuestionCardComponent({ name, title, uid }) {
  const [Count, setCount] = useState(0);
  const [voted, setVoted] = useState("");

  const dispatch = useDispatch();

  let user = useSelector((state) => state.UserDetails.values);

  let arr = useSelector((state) => state.questionsList.values);

  const [loading, setLoading] = useState(false);

  const updateDel = async () => {
    setLoading(true);
    arr = arr.filter((item) => item.title !== title);
    await DataBase.doc(`/allQuestions/${title}/quesData/ansDetails`).delete();
    await DataBase.doc(`/allQuestions/${title}/quesData/quesDetails`).delete();
    await DataBase.doc(`/allQuestions/${title}/quesData/voteCount`).delete();
    await DataBase.doc(
      `/allQuestions/${title}/quesData/votingDetails`
    ).delete();
    await DataBase.doc(`/allQuestions/${title}`).delete();
    dispatch(quesList({ arr }));
    setLoading(false);
  };

  const upVoteHandle = async () => {
    if (voted !== "up") {
      let voteCount;
      if (voted) {
        voteCount = Count + 2;
        setCount(Count + 2);
        setVoted("up");
      } else {
        voteCount = Count + 1;
        setCount(Count + 1);
        setVoted("up");
      }
      await DataBase.collection("allQuestions")
        .doc(title)
        .collection("quesData")
        .doc("votingDetails")
        .collection(user[0].uid)
        .doc("userVote")
        .set({ vote: "up" });
      await DataBase.collection("allQuestions")
        .doc(title)
        .collection("quesData")
        .doc("voteCount")
        .set({ voteCount: voteCount });
    }
    if (voted === "up") {
      const voteCount = Count - 1;
      setCount(Count - 1);
      setVoted("");
      await DataBase.collection("allQuestions")
        .doc(title)
        .collection("quesData")
        .doc("votingDetails")
        .collection(user[0].uid)
        .doc("userVote")
        .set({ vote: "" });
      await DataBase.collection("allQuestions")
        .doc(title)
        .collection("quesData")
        .doc("voteCount")
        .set({ voteCount: voteCount });
    }
  };

  const downVoteHandle = async () => {
    if (voted !== "down") {
      let voteCount;
      if (voted) {
        voteCount = Count - 2;
        setCount(Count - 2);
        setVoted("down");
      } else {
        voteCount = Count - 1;
        setCount(Count - 1);
        setVoted("down");
      }
      await DataBase.collection("allQuestions")
        .doc(title)
        .collection("quesData")
        .doc("votingDetails")
        .collection(user[0].uid)
        .doc("userVote")
        .set({ vote: "down" });
      await DataBase.collection("allQuestions")
        .doc(title)
        .collection("quesData")
        .doc("voteCount")
        .set({ voteCount: voteCount });
    }
    if (voted === "down") {
      const voteCount = Count + 1;
      setCount(Count + 1);
      setVoted("");
      await DataBase.collection("allQuestions")
        .doc(title)
        .collection("quesData")
        .doc("votingDetails")
        .collection(user[0].uid)
        .doc("userVote")
        .set({ vote: "" });
      await DataBase.collection("allQuestions")
        .doc(title)
        .collection("quesData")
        .doc("voteCount")
        .set({ voteCount: voteCount });
    }
  };

  const getVotes = async () => {
    let url = `/allQuestions/${title}/quesData`;
    const voteCountDatabse = await DataBase.collection(url).get();
    voteCountDatabse.forEach((item) => {
      if (item.data().voteCount) {
        setCount(item.data().voteCount);
      }
    });
    url = `/allQuestions/${title}/quesData/votingDetails/${user[0].uid}`;
    const answers = await DataBase.collection(url).get();
    answers.forEach((item) => {
      setVoted(item.data().vote);
    });
  };

  useEffect(() => {
    getVotes();
  }, []);

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
                className={`triangle-up ${voted === "up" ? "upVote" : ""}`}
                onClick={upVoteHandle}
              ></Row>
              <Row>
                <p className="noselect">{Count}</p>
              </Row>
              <Row
                className={`triangle-down ${
                  voted === "down" ? "downVote" : ""
                }`}
                onClick={downVoteHandle}
              ></Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
