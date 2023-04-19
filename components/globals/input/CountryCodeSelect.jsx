import React,{useState} from 'react'
import styles from './CountryCodeSelect.module.scss'
import {countries} from '../../../utils/staticData';
import Input from './Input';
function CountryCodeSelect(props) {
  return (
    <div className={styles.container}>
        <select value={props.value} onChange={props.onChange}>
        {countries.map(country => 
        <option 
          value={country.countryCode}
          >
          {country.flag+' '+country.name+' ('+country.countryCode+')'}
        </option>)}
        </select>
    </div>
  )
}

export default CountryCodeSelect