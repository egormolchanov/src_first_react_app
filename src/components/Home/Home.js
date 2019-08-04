import React from 'react'
import Button from '../UI/Button'
import classes from './Home.css'

const Home = props => {
    return (
        <div className={classes.Home}>
            <h1>Пройдите этот небольшой тест по JavaScript</h1>
            <Button 
                styles={'Button__standard_large'} 
                onClickBnt={props.onClickBnt}>
                Начать тест
                </Button>
        </div>
    )
}

export default Home