import React from 'react'
import classes from './CounterQuiz.css'

const CounterQuiz = props => {
    return (
        <div className={classes.counterQuiz}>
            <p>{props.countQuiz}/{props.lengthCountQuiz}</p>
            <progress max={props.lengthCountQuiz} value={props.countQuiz}></progress>
        </div>
    )
}

export default CounterQuiz