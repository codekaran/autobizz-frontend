import React from 'react'
import SearchBar from '../../globals/search/SearchBar';
import styles from './Search.module.scss'

const Search = (props) => {
  return (
    <div className={styles.search}>
        <SearchBar/>
    </div>
  )
}

export default Search;