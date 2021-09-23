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

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Switch>
        <Route exact path="/">
          <HomeComponent />
        </Route>
        <Route exact path="/ques">
          <YourQuestionsComponet />
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
    </Router>
  );
}

export default App;
