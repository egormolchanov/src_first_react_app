import React from 'react'
import classes from './FinishedQuiz.css'
import imgSuccses from '../../images/success.png'
import imgError from '../../images/error.png'
import CountPercent from './CountPercent/CountPercent'
import Button from '../UI/Button'

const FinishedQuiz = props => {

    return (
        <div className={classes.FinishedQize}>
            <h1>Результат теста</h1>
            <div className={classes.resultsTable}>
                <div>
                    <CountPercent 
                    result={props.result}
                    finalText={props.finalText}
                    percent={props.percent}
                    />
                </div>
                <div>
                    <img src={imgError} alt=''/>
                    <span>{props.errorAnswer}</span>
                </div>
                <div>
                    <img src={imgSuccses} alt=''/>
                    <span>{props.successAnswer}</span>
                </div>
            </div>
            <Button styles={'Button__purple'} onClickBnt={props.onClickBnt[1]}>Закончить тест</Button>
            <Button styles={'Button__transparent'} onClickBnt={props.onClickBnt[0]}>Попробовать снова</Button>
        </div>
    )
}

export default FinishedQuiz