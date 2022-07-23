import React from 'react'
import './Button.css'

export default function Button({text, appointment}) {

    return (
        <div >
           <button className={appointment === 'true' ? 'button appointBtn' : "button"}>{text}</button>
        </div>
    )
}