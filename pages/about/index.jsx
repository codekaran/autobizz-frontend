import About from "../../components/pages/about/About";

import { getCars } from "../apiCalls";

const about = (props) => {
  return (
    <>
      <About carsArray={props.data}></About>
    </>
  );
};

export async function getStaticProps() {
  let result = await getCars();
  console.log(result);
  return {
    props: { data: result.data },
  };
}

export default about;
