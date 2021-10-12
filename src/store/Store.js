import { configureStore } from "@reduxjs/toolkit";
import AllQuestions from "./features/AllQuestions";
import LogCheck from "./features/LogCheck";
import UserDetails from "./features/UserDetails";

const store = configureStore(
  {
    reducer: {
      questionsList: AllQuestions,
      LogCheck: LogCheck,
      UserDetails: UserDetails,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
