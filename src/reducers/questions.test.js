import questions from './questions'
import { UPDATE_VOTE } from '../actions/questions'


describe('questions reduces',() => 
{ it('should handle update vote', () => {
    expect(questions(
        {
            "8xf0y6ziyjabvozdd253nd": {
                id: '8xf0y6ziyjabvozdd253nd',
                author: 'sarahedo',
                timestamp: 1467166872634,
                optionOne: {
                    votes: ['sarahedo'],
                    text: 'have horrible short term memory',
                },
                optionTwo: {
                    votes: [],
                    text: 'have horrible long term memory'
                }
            }
        },
        {
            type: UPDATE_VOTE,
            qid: "8xf0y6ziyjabvozdd253nd",
            authedUser: "test",
            answer: "optionTwo"
        }
    )).toEqual({
        "8xf0y6ziyjabvozdd253nd": {
            id: '8xf0y6ziyjabvozdd253nd',
            author: 'sarahedo',
            timestamp: 1467166872634,
            optionOne: {
                votes: ['sarahedo'],
                text: 'have horrible short term memory'
            },
            optionTwo: {
                votes: ["test"],
                text: 'have horrible long term memory'
            }
        }
    })
})})
