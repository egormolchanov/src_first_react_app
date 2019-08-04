import React from 'react'
import AnswersList from './AnswersList/AnswersList';
import classes from './ActiveQuiz.css'
import Button from '../UI/Button'

const ActiveQuiz = props => {
    return (
        <div className={classes.ActiveQuiz}>
            <p>{props.question}</p>
            {!!props.example ? <div className={classes.example}>{props.example}</div>: null}
            <AnswersList 
                answer={props.answers} 
                onAnswer={props.onAnswer}
                clickAnswer={props.clickAnswer}
                rightAnswer={props.rightAnswer}
                lockChoice={props.lockChoice}
                result={props.result}
            />
            {
                props.clickAnswer
                ? <Button 
                        styles={'Button__standard'}
                        onClickBnt={props.onClickBnt}
                        clickAnswer={props.clickAnswer}> 
                        {props.typeButton}
                        </Button> 
                : null 
            }
        </div>
    )
}

export default ActiveQuiz