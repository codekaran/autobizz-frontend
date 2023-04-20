import React, { useContext, useEffect } from 'react'
import search from '../../../pages/search';
import SearchBar from '../../globals/search/SearchBar';
import FilterSection from '../../globals/filterSection/FilterSection';
import styles from './Search.module.scss';
import SearchResults from '../../globals/searchResults/SearchResults';
import SearchContext from '../../../context/Search/SearchContext';

const Search = (props) => {
  const searchCtx = useContext(SearchContext);
  useEffect(() => {
    searchCtx.updateResults({
      make:null,
      model:null,
      max_mileage:1000000,
      min_mileage:0
    })
  }, [])
  
  return (
    <div className={styles.search}>
        <div className={styles.bottom}>
        <div className={styles.filterSection}><FilterSection/></div>
        <div className={styles.searchResults}>
          <SearchBar style={{marginTop:'120px'}}/>
          <SearchResults/>
        </div>
        </div>
    </div>
  )
}

export default Search;