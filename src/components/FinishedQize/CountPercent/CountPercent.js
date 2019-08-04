import React from 'react'
import classes from './CountPercent.css'

const CountPercent = props => {

    return (
        <div className={classes.CountPercent}>
            <strong className={classes[props.result]}>{props.percent}%</strong>
            <p>{props.finalText}</p>
        </div>
    )
}

export default CountPercent