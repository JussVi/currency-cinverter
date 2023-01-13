import React from "react";
import style from "./style.module.css"

function InputField(props){
    const {
        label,
        value,
        onChange,
        type = 'text'
    } = props

    return(
        <div className={style["input-main-block"]}>
        <label className={style["text-style"]}>{label}</label>
        <input 
        onChange={(event) => onChange(event.target.value)}
        value={value}
        className={style["field-style"]} 
        type={type} 
        />
        </div>
    )
}

export default InputField