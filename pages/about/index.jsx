import Head from "next/head";
import About from "../../components/pages/about/About";

import { getCars } from "../apiCalls";

const about = (props) => {
  return (
    <>
     <Head>
        <title>About</title>
      </Head>
      <About carsArray={props.data}></About>
    </>
  );
};

export async function getStaticProps() {
  let result = await getCars();
  return {
    props: { data: result.data },
  };
}

export default about;
