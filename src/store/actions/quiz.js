import axios from 'axios'
import {
    ANSWER_CHOISE,
    SUCCESS_ANSWER,
    ERROR_ANSWER,
    NEXT_QUESTION,
    AGAIN_QUIZ,
    COUNT_PERCENT_SUCCESS,
    COUNT_PERCENT_NOT_SUCCESS,
    BEGIN_QUIZ,
    COME_BACK_HOME,
    REQUEST_QUIZ
    } from './actionTypes'

export function checkAnswers() {
    
    return (dispatch, getState) => {

        const state = getState()

        switch (state.quiz.typeButton) {
            case 'Проверить ответ':
                switch (state.quiz.clickAnswer) {
                    case state.quiz.quiz[state.quiz.activeQuestion].rightAnswerId: 
                        dispatch(successAnswer(state.quiz.successAnswer + 1))
                        break;
                    default:
                        dispatch(errorAnswer(state.quiz.errorAnswer + 1))
                        break;
                }
                break;
            case 'Продолжить':
                if (state.quiz.activeQuestion < state.quiz.quiz.length - 1) {
                    dispatch(nextQuestion(state.quiz.activeQuestion + 1))
                } else {
                    dispatch(finishedQuiz())
                }
                break;
            default:
                break;
        }
    }
} 

export function answerChoice(answer) {
    return {
        type: ANSWER_CHOISE,
        answer
    }
}

export function successAnswer(countAnswerS) {
    return {
        type: SUCCESS_ANSWER,
        countAnswerS
    }
}

export function errorAnswer(countAnswerE) {
    return {
        type: ERROR_ANSWER,
        countAnswerE
    }
} 

export function nextQuestion(countQuiz) {
    return {
        type: NEXT_QUESTION,
        countQuiz
    }
}

export function againQuiz() {
    return {
        type: AGAIN_QUIZ
    }
}

export function finishedQuiz() {
    return (dispatch, getState) => {

        const state = getState()

        const percent = parseInt((state.quiz.successAnswer / state.quiz.quiz.length) * 100)

        if (percent > 50) {
            dispatch(countPercent_success(percent))
        } else {
            dispatch(countPercent_not_success(percent))
        }
    }
}

export function countPercent_success(percent) {
    return {
        type: COUNT_PERCENT_SUCCESS,
        percent
    }
}

export function countPercent_not_success(percent) {
    return {
        type: COUNT_PERCENT_NOT_SUCCESS,
        percent
    }
}

export function beginQuiz() {
    return {
        type: BEGIN_QUIZ
    }
}

export function comeBackHome() {
    return {
        type: COME_BACK_HOME
    }
}

export function startRequestQuiz() {
    return async dispatch => {
        try {
            const response = await axios.get('https://first-react-app-4c905.firebaseio.com/quiz.json')
            const quiz = response.data

            dispatch(requestQuiz(quiz))

        } catch (e) {
            console.log(e)
        }
    }
    
}

export function requestQuiz(listQuiz) {
    return {
        type: REQUEST_QUIZ,
        listQuiz
    }
}