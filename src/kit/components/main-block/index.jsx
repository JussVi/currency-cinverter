import React from "react";
import HeaderBlock from '../header-block/index.jsx';
import Result from '../result-converter/index.jsx';
import InputField from '../input-field/index.jsx';
import CountryCurrency from "../country-currency/index.jsx";
import ConverterBtn from "../converter-btn/index.jsx";
import style from './style.module.css'



function MainBlock() {
  return (
    <div className={style['main-block']}>
      <HeaderBlock />
      <Result />
      <InputField />
      <CountryCurrency />
      <ConverterBtn />
    </div>
  );
}

export default MainBlock