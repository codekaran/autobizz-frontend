import axios from "axios";
import Head from "next/head";
import Search from "../../components/pages/search/Search";

const search = (props) => {
  return (
    <>
     <Head>
        <title>Search</title>
      </Head>
      <Search></Search>
    </>
  );
};

export default search;
