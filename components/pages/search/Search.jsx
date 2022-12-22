import React from 'react'
import search from '../../../pages/search';
import SearchBar from '../../globals/search/SearchBar';
import FilterSection from '../../globals/filter/FilterSection';
import styles from './Search.module.scss';
import SearchResults from '../../globals/searchResults/SearchResults';

const Search = (props) => {
  return (
    <div className={styles.search}>
        <SearchBar/>
        <div className={styles.bottom}>
        <div className={styles.filterSection}><FilterSection/></div>
        <div className={styles.searchResults}><SearchResults/></div>
        </div>
    </div>
  )
}

export default Search;