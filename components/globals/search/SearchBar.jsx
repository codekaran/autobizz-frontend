
import { useContext, useEffect, useState } from "react";
import styles from "./SearchBar.module.scss";
import Button from '../button/Button';
import { makes,models,prices, mileages } from "../../../utils/staticData";
import { FaCross, FaSearch } from "react-icons/fa";
import {CgClose} from 'react-icons/cg';
import SearchContext from "../../../context/Search/SearchContext";

const SearchBar = (props) => {
  const [formData,setFormData] = useState({
    make:null,
    model:null,
    max_mileage:1000000,
    min_mileage:0
  });
  const [open,setOpen] = useState(false);
  const {setSearchState} = useContext(SearchContext); 
  const {make,model,maxPrice,mileage} = formData;
  const searchCtx = useContext(SearchContext);
  useEffect(() => {
    if(window.innerWidth>768)setOpen(true)
  }, [])
  

  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
    if(field === 'make')setFormData({...formData,[field]:event.target.value,model:models.filter(model => model.make===event.target.value).slice(0,1)[0].model})
    if(field ==='make' && event.target.value==='ALL') setFormData({...formData,[field]:null, model:null})
    if(field ==='model' && event.target.value==='ALL') setFormData({...formData,[field]:null})
    if(field === 'mileage'){
      const miles = event.target.value;
      if (miles === 'ALL') setFormData({...formData,max_mileage:1000000, min_mileage:0})
      else {
        const max = Number.parseInt(miles.split('-').pop())*1000;
        const min = Number.parseInt(miles.split('-').shift())*1000;

        if(miles==='90,000+'){
          max=1000000;
          min=90000
        }
        setFormData({...formData,max_mileage:max, min_mileage:min})
      }
    }
  };
  const handleSubmit = async (e)=>{
    e.preventDefault();
    searchCtx.updateResults(formData);
  }
  const toggleOpen = () => {
    setOpen(open => !open)
  }
  return (
    <div className={open ? styles.searchBar : styles.searchBarClosed} {...props}>
      <div className={styles.showSearch}>
      <Button theme='light' onClick = {toggleOpen}>{open? <CgClose/> : <FaSearch/>}</Button>
      </div>
      <div className={styles.form}>
      <form onSubmit={handleSubmit}>
       <label htmlFor="make">
        Makes
       <select className={styles.select} name = "make" value={make} onChange={handleChange('make')}>
          {makes.map(make => {
            if(make==='ALL')return <option value={null}>{make}</option>
            else return <option>{make}</option>
          })}
        </select>
       </label>
        <label htmlFor="model">
        Models
        <select className={styles.select} name = "model" value={model} onChange={handleChange('model')}>
          {models.map(model =>{
            if(model.make==='ALL')return <option value={null}>{'ALL'}</option>
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
        <select className={styles.select} name = "mileage" onChange={handleChange('mileage')}>
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
