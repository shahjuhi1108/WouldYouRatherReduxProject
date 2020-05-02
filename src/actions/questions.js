import { saveQuestion, saveQuestionAnswer } from '../utils/api'

export const ADD_QUESTION = 'ADD_QUESTION'
export const UPDATE_VOTE = 'UPDATE_VOTE'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion (optionOne, optionTwo) {
    return (dispatch, getState) => {

        //const { authedUser } = getState().authedUser

        return saveQuestion({
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author: "sarahedo",
        })
            .then((question) => dispatch(addQuestion(question)))
    }
}

export function updateVote (question) {
  return {
    type: UPDATE_VOTE,
    question
  }
}

export function handleUpdateVote (qid, answer) {
  return (dispatch, getState) => {
    //const {authedUser} = getState().authedUser

    return saveQuestionAnswer({
      authedUser: "tylermcginnis",
      qid: qid,
      answer: answer
    })
      .then(() => dispatch(updateVote(qid, answer)))
  }
}