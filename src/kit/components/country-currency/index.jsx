import React from "react";
import Select from 'react-select'
import style from "./style.module.css"
import SwapHorizIcon from "@mui/icons-material/SwapHoriz"
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

function CountryCurrency(){
    return(
        <div>
            <label classNames={style['text-style']}>From</label>
                <div className={style['currency-block']}>
                    <Select className={style['field-style']} options={options} />
                    <SwapHorizIcon className={style['swap-icon']} />
                    <Select className={style['field-style']} options={options} />
                </div>
        </div>
    )
}

export default CountryCurrency