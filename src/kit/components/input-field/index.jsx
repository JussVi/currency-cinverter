import React from "react";
import style from "./style.module.css"

function InputField(){
    return(
        <div className={style["input-main-block"]}>
        <label className={style["text-style"]}>Amount</label>
        <input className={style["field-style"]} type="text" />
        </div>
    )
}

export default InputField