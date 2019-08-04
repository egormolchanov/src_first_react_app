import React from 'react'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import classes from './Quiz.css'
import CounterQuiz from '../../components/CounterQuiz/CounterQuiz'
import FinishedQuiz from '../../components/FinishedQize/FinishedQuiz'
import {connect} from 'react-redux'
import {answerChoice, checkAnswers, againQuiz, beginQuiz, comeBackHome, startRequestQuiz} from '../../store/actions/quiz'
import Home from '../../components/Home/Home'

class Quiz extends React.Component {

    componentDidMount() {
        this.props.startRequestQuiz()
    }

    render() {
        return (
            <div className={classes.Quiz}>
                {
                    this.props.beginQuestion
                    ?        
                        this.props.finishedQuestion
                        ?
                            <div className={classes.QuizWrapper}>
                                <FinishedQuiz 
                                    successAnswer={this.props.successAnswer} 
                                    errorAnswer={this.props.errorAnswer}
                                    lengthQuiz={this.props.quiz.length}
                                    onClickBnt={[this.props.againQuiz, this.props.comeBackHome]}
                                    result={this.props.result}
                                    finalText={this.props.finalText}
                                    percent={this.props.percent}
                                />
                            </div>
                        :
                            <React.Fragment>
                                <CounterQuiz countQuiz={this.props.activeQuestion + 1} lengthCountQuiz={this.props.quiz.length}/>
                                <div className={classes.QuizWrapper}>
                                    <ActiveQuiz 
                                        question={this.props.quiz[this.props.activeQuestion].question}
                                        example={this.props.quiz[this.props.activeQuestion].example} 
                                        answers={this.props.quiz[this.props.activeQuestion].answers}
                                        onAnswer={this.props.answerChoice}
                                        clickAnswer={this.props.clickAnswer}
                                        lockChoice={this.props.lockChoice}
                                        rightAnswer={this.props.quiz[this.props.activeQuestion].rightAnswerId}
                                        onClickBnt={this.props.checkAnswers}
                                        typeButton={this.props.typeButton}
                                        result={this.props.result}
                                    />
                                </div>
                            </React.Fragment>
                    :   
                        <div className={classes.QuizWrapper}>
                            <Home onClickBnt={this.props.beginQuiz}/>
                        </div>

                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        quiz: state.quiz.quiz,
        activeQuestion: state.quiz.activeQuestion,
        clickAnswer: state.quiz.clickAnswer,
        successAnswer: state.quiz.successAnswer,
        errorAnswer: state.quiz.errorAnswer,
        lockChoice: state.quiz.lockChoice,
        typeButton: state.quiz.typeButton,
        finishedQuestion: state.quiz.finishedQuestion,
        result: state.quiz.result,
        finalText: state.quiz.finalText,
        percent: state.quiz.percent,
        beginQuestion: state.quiz.beginQuestion
    }
}

function mapDispatchToProps(dispatch) {
    return {
        answerChoice: id => dispatch(answerChoice(id)),
        checkAnswers: () => dispatch(checkAnswers()),
        againQuiz: () => dispatch(againQuiz()),
        beginQuiz: () => dispatch(beginQuiz()),
        comeBackHome: () => dispatch(comeBackHome()),
        startRequestQuiz: () => dispatch(startRequestQuiz())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz)