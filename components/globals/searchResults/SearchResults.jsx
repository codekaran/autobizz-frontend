import React, { useContext } from 'react'
import styles from './SearchResults.module.scss';
import SearchContext from '../../../context/Search/SearchContext';
import SearchResultCard from '../cards/SearchResultCard';
import CarCard from '../cards/CarCard';

const SearchResults = () => {
  const SearchCtx = useContext(SearchContext);
  return (
    <div className={styles.container}>
      {SearchCtx.results.map(result=> <CarCard carData={result}></CarCard>)}
    </div>
  )
}

export default SearchResults