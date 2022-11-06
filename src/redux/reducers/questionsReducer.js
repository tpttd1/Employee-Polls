import { ADD_QUESTION, STORAGE_QUESTIONS } from "../../constants";

const INIT_STATE = {
  questions: [],
  loading: false,
};

export default function questionsReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        loading: false,
        questions: [...state.questions, action.questions],
      };
    case STORAGE_QUESTIONS:
      return { ...state, loading: false, questions: action.questions };
    default:
      return { ...state };
  }
}
