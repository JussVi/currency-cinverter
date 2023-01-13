import React, { useEffect, useState } from "react";
import HeaderBlock from '../header-block/index.jsx';
import CurrencySelectGroup from "../currency-select-group/index.jsx";
import { TextField } from "@mui/material";
import style from './style.module.css'

const BASE_URL = 'https://api.apilayer.com/fixer/latest'
const CONVERT_URL = (from, to, amount) => `https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`
const API_KEY = 'XXIgLmYLiOB7k7Vb8nwtXGDhaXfrAHZH'

const REQUEST_HEADERS = {
  method: 'GET',
  headers: new Headers({
    apikey: API_KEY
  })
}

function MainBlock() {
  const [input, setInput] = useState('')
  const [res, setRes] = useState('')
  const [rates, setRates] = useState([])
  const [fromRates, setFromRates] = useState(null)
  const [toRates, setToRates] = useState(null)

  const handleInputChange = (ev) => {
    setInput(ev.target.value)
  }

  const handleChangeFrom = (option) => {
    setFromRates(option)
  }

  const handleChangeTo = (option) => {
    setToRates(option)
  }

  const handleSwitchCurrency =() => {
    console.log('click on the switch')
  }

  const handleClickConvert = async () => {
    try {
      const res = await fetch(CONVERT_URL(toRates.value, fromRates.value, input))
      const data = await res.json()
    } catch(e) {

    }
    console.log(res, 'res')
  }

  const fetchRates = async () => {
    try {
      const res = await fetch(BASE_URL, REQUEST_HEADERS)
      const data = await res.json()
      setRes(data.result)
      return data
    } catch (e) {
      console.log(e, 'Error')
    }}

  useEffect(() => {
    (async () => {
      const data = await fetchRates()
      const rates = Object.keys(data.rates).map(item => ({
        label: item,
        value: item
      }))
      setRates(rates)
    })
  }, [])

  return (
    <div className={style['main-block']}>
      <HeaderBlock />
      <h2 className={style['result-style']}>
        {res}
      </h2>
      <TextField 
        type='number' 
        label='amount' 
        fullWidth
        value={input}
        onChange={handleInputChange}
      />
      <CurrencySelectGroup 
        from={fromRates}
        to={toRates}
        options={rates}
        onChangeFrom={handleChangeFrom}
        onChangeTo={handleChangeTo}
        onSwitchCurrency={handleSwitchCurrency}
      />
      <div className={style['btn-wrap']}>
        <button 
          onClick={handleClickConvert}
          className={style['btn-style']}
        >
          CONVERT
        </button>
      </div>
    </div>
  );
}

export default MainBlock