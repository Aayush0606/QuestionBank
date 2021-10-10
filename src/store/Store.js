import { configureStore } from "@reduxjs/toolkit";
import AllQuestions from "./features/AllQuestions";
import LogCheck from "./features/LogCheck";

const store = configureStore(
  {
    reducer: {
      questionsList: AllQuestions,
      LogCheck: LogCheck,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
