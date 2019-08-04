import React from 'react'
import classes from './Button.css'

const Button = props => {

    const cls = [classes.Button]

    if (!!props.styles) {
        cls.push(classes[props.styles])
    }
    
    return (
        <button onClick={props.onClickBnt} 
                className={cls.join(' ')}>
                {props.children}
                </button>
    )
}

export default Button