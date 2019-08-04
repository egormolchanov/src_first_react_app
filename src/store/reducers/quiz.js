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
    } from '../actions/actionTypes';

const initialState = {
    quiz: [], // server add
    activeQuestion: 0, //leafing through questions
    clickAnswer: 0, //number answer
    successAnswer: 0, //count answers
    errorAnswer: 0, //count answers
    lockChoice: false, //block button answer
    typeButton: 'Проверить ответ',
    finishedQuestion: false, //finished page
    result: null, //add styles
    finalText: null, //finished page
    percent: null, //count percent success
    beginQuestion: false //start quiz
}

export default function quizReducer(state = initialState, action) {
    switch (action.type) {
        case ANSWER_CHOISE:
            return {
                ...state, 
                clickAnswer: action.answer,
                result: 'AnswersItem_active'
            }
        case SUCCESS_ANSWER:
            return {
                ...state, 
                successAnswer: action.countAnswerS,
                lockChoice: true,
                typeButton: 'Продолжить',
                result: 'AnswersItem_success'
            }
        case ERROR_ANSWER:
            return {
                ...state,
                errorAnswer: action.countAnswerE,
                lockChoice: true,
                typeButton: 'Продолжить',
                result: 'AnswersItem_error'
            }
        case NEXT_QUESTION:
            return {
                ...state,
                activeQuestion: action.countQuiz,
                typeButton: 'Проверить ответ',
                clickAnswer: null,
                lockChoice: false
            }
        case AGAIN_QUIZ:
            return {
                ...state,
                activeQuestion: 0,
                clickAnswer: null,
                successAnswer: 0,
                errorAnswer: 0,
                lockChoice: false,
                typeButton: 'Проверить ответ',
                finishedQuestion: false
            }
        case COUNT_PERCENT_SUCCESS: 
            return {
                ...state,
                finishedQuestion: true,
                result: 'CountPercent_success',
                finalText: 'Хорошая работа!',
                percent: action.percent
            }
        case COUNT_PERCENT_NOT_SUCCESS: 
            return {
                ...state,
                finishedQuestion: true,
                result: 'CountPercent_error',
                finalText: 'Нужно больше практиковаться!',
                percent: action.percent
            }
        case BEGIN_QUIZ:
            return {
                ...state,
                beginQuestion: true
            }
        case COME_BACK_HOME:
            return {
                ...state,
                activeQuestion: 0,
                clickAnswer: null,
                successAnswer: 0,
                errorAnswer: 0,
                lockChoice: false,
                typeButton: 'Проверить ответ',
                finishedQuestion: false,
                beginQuestion: false
            }
        case REQUEST_QUIZ:
            return {
                ...state,
                quiz: action.listQuiz
            }
    
        default:
            return state
    }
}