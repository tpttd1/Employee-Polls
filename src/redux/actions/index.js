import { ADD_QUESTION, STORAGE_QUESTIONS, LOGIN_USER_SUCCESS, STORAGE_USERS } from "../../constants";
import { _getQuestions, _getUsers } from "../../data/_DATA";

const saveQuestions = (questions) => ({
  type: STORAGE_QUESTIONS,
  questions,
});

export const storeQuestions = (questions) => (dispatch) => {
  dispatch(saveQuestions(questions));
};

export const getCurrentQuestions = () => (dispatch) => {
  _getQuestions().then((data) => {
    const questions = Object.values(data);
    questions.sort((a, b) => {
      return b.timestamp - a.timestamp;
    });
    dispatch(storeQuestions(questions));
  });
};

const addQuestion = (question) => ({
  type: ADD_QUESTION,
  question,
});

export const createNewPoll = (question) => (dispatch) => {
  dispatch(addQuestion(question));
};

export const getCurrentUsers = () => (dispatch) => {
  _getUsers().then((data) => {
    dispatch(storeUsers(Object.values(data)));
  });
};

const saveUsers = (users) => ({
  type: STORAGE_USERS,
  users,
});

export const storeUsers = (users) => (dispatch) => {
  dispatch(saveUsers(users));
};

const addUser = (user) => ({
  type: LOGIN_USER_SUCCESS,
  user,
});

export const loginUser = (user) => (dispatch) => {
  dispatch(addUser(user));
};
