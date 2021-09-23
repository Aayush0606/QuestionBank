import { configureStore } from "@reduxjs/toolkit";
import AllQuestions from "./features/AllQuestions";

const store = configureStore({
  reducer: {
    questionsList: AllQuestions,
  },
});

export default store;
