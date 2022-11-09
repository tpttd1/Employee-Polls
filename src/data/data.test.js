/* eslint-disable jest/no-conditional-expect */
import { _saveQuestion, _saveQuestionAnswer } from "./_DATA";

describe("Test API", () => {
  it("Question saved successfully", async () => {
    const newQuestion = {
      optionOneText: "Question number 1",
      optionTwoText: "Question number 2",
      author: "sarahedo",
    };
    const data = await _saveQuestion(newQuestion);
    expect(data).toEqual({
      author: "sarahedo",
      id: expect.any(String),
      optionOne: {
        votes: [],
        text: "Question number 1",
      },
      optionTwo: {
        votes: [],
        text: "Question number 2",
      },
      timestamp: expect.any(Number),
    });
  });

  it("Question saved by incorrect auth user!", async () => {
    const newQuestion = {
      optionOneText: "Test 1",
      optionTwoText: "Test 2",
      author: "",
    };
    try {
      await _saveQuestion(newQuestion);
    } catch (error) {
      expect(error).toEqual(
        "Please provide optionOneText, optionTwoText, and author"
      );
    }
  });

  it("Question saved answer successfully!", async () => {
    const response = await _saveQuestionAnswer({
      authedUser: "sarahedo",
      qid: "vthrdm985a262al8qx3do",
      answer: "optionTwo",
    });
    expect(response).toEqual(true);
  });

  it("Question saved by incorrect auth user", async () => {
    try {
      await _saveQuestionAnswer({
        authedUser: "",
        qid: "vthrdm985a262al8qx3do",
        answer: "optionOne",
      });
    } catch (error) {
      expect(error).toEqual("Please provide authedUser, qid, and answer");
    }
  });

  // it("renders correctly to create snapshot", () => {
  //   const wrapper = render(<Login />);
  //   expect(wrapper).toMatchSnapshot();
  // });
  // it("Question saved answer with incorrect qid", () => {
  //   try {
  //     _saveQuestionAnswer({
  //       authedUser: "sarahedo",
  //       qid: "vthrdm985a262al8qx3d0o",
  //       answer: "optionOne",
  //     });
  //   } catch (e) {
  //     expect(e).toEqual({
  //       status: 404,
  //       message: "s",
  //       data: null,
  //     });
  //   }
  // });
});
