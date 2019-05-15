//work in progress...want to create a reusable button
import React from 'react';
import './style.css'

const Button = (props) => {
    const { callback, title, id } = props;
    return (
        <button
            className="submit-button"
            id={id}
            type="button"
            style={}
            onClick={callback()}>{title}</button>
    )
}

export default Button;