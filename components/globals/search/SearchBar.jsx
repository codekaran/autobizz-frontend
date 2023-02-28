
import { useContext, useEffect, useState } from "react";
import styles from "./SearchBar.module.scss";
import Button from '../button/Button';
import { makes,models,prices, mileages } from "../../../utils/staticData";
import { FaCross, FaSearch } from "react-icons/fa";
import {CgClose} from 'react-icons/cg';
import SearchContext from "../../../context/Search/SearchContext";

const SearchBar = () => {
  const [formData,setFormData] = useState({
    make:'ALL',
    model:'ALL',
    maxPrice:1000,
    minPrice:0,
    mileage:'0-30,000',
  });
  const [open,setOpen] = useState(false);
  const {setSearchState} = useContext(SearchContext); 
  const {make,model,maxPrice,mileage} = formData;

  useEffect(() => {
    if(window.innerWidth>768)setOpen(true)
  }, [])
  

  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
  }
  const toggleOpen = () => {
    setOpen(open => !open)
  }
  return (
    <div className={open ? styles.searchBar : styles.searchBarClosed}>
      <div className={styles.showSearch}>
      <Button theme='light' onClick = {toggleOpen}>{open? <CgClose/> : <FaSearch/>}</Button>
      </div>
      <div className={styles.form}>
      <form onSubmit={handleSubmit}>
       <label htmlFor="make">
        Makes
       <select className={styles.select} name = "make" value={make} onChange={handleChange('make')}>
          {makes.map(make => {
            return <option>{make}</option>
          })}
        </select>
       </label>
        <label htmlFor="model">
        Models
        <select className={styles.select} name = "model" value={model} onChange={handleChange('model')}>
          {models.map(model =>{
            if (model.make === make)
            return <option>{model.model}</option>
          })}
        </select>
        </label>
        <label htmlFor="maxPrice">
        Max Price (€)
        <select className={styles.select} name = "maxPrice" value={maxPrice} onChange={handleChange('maxPrice')}>
          {prices.map(price => {
            return <option>{price}</option>
          } )}
        </select>
        </label>
        <label htmlFor="mileage">
        Mileage (km)
        <select className={styles.select} name = "mileage" value={mileage} onChange={handleChange('mileage')}>
          {mileages.map(mileage => {
            return <option>{mileage}</option>
          } )}
        </select>
        </label>
        <Button type='submit' icon={<FaSearch/>}>Search</Button>
       </form>
      </div>
    </div>
  );
};

export default SearchBar;
