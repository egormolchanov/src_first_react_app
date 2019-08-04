import React from 'react' 
import AnswersItem from './AnswersItem/AnswersItem';
import classes from './AnswersList.css'

const AnswersList = props => (
    <ul className={classes.AnswersList}>
        {props.answer.map((answer, index) => {
            return (
                <AnswersItem 
                    answer={answer} 
                    key={index} 
                    onAnswer={props.onAnswer}
                    clickAnswer={props.clickAnswer}
                    rightAnswer={props.rightAnswer}
                    result={props.result}
                    lockChoice={props.lockChoice}
                />
            )
        })}
    </ul>
)

export default AnswersList