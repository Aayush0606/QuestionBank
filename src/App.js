import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import LoginComopnent from "./components/LoginComopnent";
import SignupComponent from "./components/SignupComponent";
import HomeComponent from "./components/HomeComponent";
import About from "./components/AboutComponet";
import QuestionCardComponent from "./components/QuestionCardComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Switch>
        <Route exact path="/">
          <HomeComponent />
        </Route>
        <Route exact path="/fun">
          <QuestionCardComponent />
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
