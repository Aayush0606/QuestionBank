import { configureStore } from "@reduxjs/toolkit";
import AllQuestions from "./features/AllQuestions";

const store = configureStore(
  {
    reducer: {
      questionsList: AllQuestions,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
