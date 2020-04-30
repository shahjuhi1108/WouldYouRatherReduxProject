import { saveQuestion } from '../utils/api'

export const ADD_QUESTION = 'ADD_QUESTION'


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