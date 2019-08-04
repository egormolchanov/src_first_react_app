import React from 'react'
import classes from './AnswersItem.css'

const AnswersItem = props => {

    const cls = [classes.AnswersItem]

    if (props.answer.id === props.clickAnswer) {
        cls.push(classes[props.result])
    }

    if (props.lockChoice) {
        if (props.answer.id === props.rightAnswer) {
            cls.push(classes.AnswersItem_error_success)
        }
    }
    
    return (
        <li className={cls.join(' ')} 
            onClick={() => !props.lockChoice ? props.onAnswer(props.answer.id) : null}>
            {props.answer.text}
        </li>
    )
}

export default AnswersItem