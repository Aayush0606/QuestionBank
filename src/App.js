import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import LoginComopnent from "./components/LoginComopnent";
import SignupComponent from "./components/SignupComponent";
import HomeComponent from "./components/HomeComponent";
import About from "./components/AboutComponet";
import AskQuestionComponent from "./components/AskQuestionComponent";
import YourQuestionsComponet from "./components/YourQuestionsComponet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DiscussComponent from "./components/DiscussComponent";
import { Auth } from "./config/firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { changeLog } from "./store/features/LogCheck";
import { useEffect, useState } from "react";

function App() {
  const [checkStatus, setCheckStatus] = useState(false);
  const dispatch = useDispatch();

  const CheckLogStatus = async () => {
    const user = await Auth.onAuthStateChanged((user) => {
      if (user != null) {
        dispatch(changeLog());
        setCheckStatus(true);
        console.log("entered");
      } else {
        alert("Stupid pig");
        setCheckStatus(false);
      }
    });
  };

  useEffect(() => {
    CheckLogStatus();
  }, []);

  return (
    <Router>
      {checkStatus ? (
        <>
          <NavbarComponent />
          <Switch>
            <Route exact path="/">
              <HomeComponent />
            </Route>
            <Route exact path="/ques">
              <YourQuestionsComponet />
            </Route>
            <Route exact path="/ques/:id">
              <DiscussComponent />
            </Route>
            <Route exact path="/ask">
              <AskQuestionComponent />
            </Route>
            <Route exact path="/login">
              <LoginComopnent />
            </Route>
            <Route exact path="/signup">
              <SignupComponent />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </>
      ) : (
        <>
          <Switch>
            <Route exact path="/">
              <SignupComponent />
            </Route>
            <Route exact path="/login">
              <LoginComopnent />
            </Route>
            <Route exact path="/signup">
              <SignupComponent />
            </Route>
          </Switch>
        </>
      )}
    </Router>
  );
}

export default App;
