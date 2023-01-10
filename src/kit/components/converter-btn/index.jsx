import React from "react";
import style from "./style.module.css"

function ConverterBtn(){
    return(
        <div className={style['main-block']}>
        <button className={style['btn-style']}>CONVERT</button>
        </div>
    )
}

export default ConverterBtn