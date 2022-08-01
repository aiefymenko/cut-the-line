import React from 'react'
import classNames from "classnames"
import './Buttons.scss'

export default function Buttons(props) {
  let buttonClass = classNames("button", {
    "button--confirm": props.confirm,
    " --danger": props.danger
 })

 return (
   <button
     className={buttonClass}
    //  icon={props.icon}
     onClick={props.onClick}
     disabled={props.disabled}
   >
     {props.children}
   </button>
 );
}
