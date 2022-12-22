import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./SearchBar.module.scss";
import axios from "axios";
import { server } from "../../../variables/server";
import { FaSearch } from "react-icons/fa";
import Button from '../button/Button';
import {useRouter} from "next/router";

const SearchBar = () => {
  const [searchText,setSearchText] = useState('');
  const [cars, setCars] = useState([]);
  const router = useRouter();

  useEffect(()=>{
     const getCars = async ()=> {
      const result = await axios.get(`${server.serverURL}/seller-api/ref/getModels/`)
      setCars(result.data);
    }
    getCars();
  },[]);

  const onSearch =(searchTerm)=>{
      setSearchText(searchTerm);
      // our api to fetch the search result
      console.log("search ", searchTerm);
      router.push('/search');
  }

  return (
    <div className={styles.searchBar}>
        <div className={styles.searchInput}>
          <div className={styles.input}>
            <input placeholder='Search Cars' type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
            <Button radius='0rem 0.5rem 0.5rem 0rem' onClick={()=>onSearch(searchText)}><FaSearch/></Button>
          </div>
          <div className={styles.dropdown}>
            {cars.filter((car)=>{
              const searchTerm = searchText.toLocaleLowerCase();
              const carname = car.carname.toLocaleLowerCase();
              return (
                searchTerm &&
                carname.includes(searchTerm) &&
                carname !== searchTerm
              );
            }).slice(0,8).map(({carname}) => <div onClick={() => onSearch(carname)} className={styles.dropdown_row}>{carname}</div>)}
          </div>
        </div>
    </div>
  );
};

export default SearchBar;
