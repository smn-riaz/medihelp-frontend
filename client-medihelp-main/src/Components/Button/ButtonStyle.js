import React from 'react'
import './Button.css'

export default function ButtonStyle({text, appointment}) {

    return (
        <div >
           <button className={appointment === 'true' ? 'button-style appointBtn' : "button"}>{text}</button>
        </div>
    )
}