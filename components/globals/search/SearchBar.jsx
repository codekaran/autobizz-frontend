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

const SearchBar = () => {

  return (
    <div className={styles.searchBar}>
        <input placeholder='Search Cars' type="text" />
        <button><FaSearch/></button>
    </div>
  );
};

export default SearchBar;
