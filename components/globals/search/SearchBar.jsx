import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./SearchBar.module.scss";
import AuthContext from "../../../context/auth-context";
import { useContext } from "react";
import axios from "axios";
import { server } from "../../../variables/server";
import { getSession } from "../funtions/helper";
import { useRouter } from "next/router";
import { FaSearch } from "react-icons/fa";
import Button from '../button/Button'
import { colors } from "../../../variables/colors";
const SearchBar = () => {
  const [searchText,setSearchText] = useState('');

  return (
    <div className={styles.searchBar}>
        <input placeholder='Search Cars' type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
        <Button radius='0rem 0.5rem 0.5rem 0rem'><Link href={'/search'}><FaSearch/></Link></Button>
    </div>
  );
};

export default SearchBar;
