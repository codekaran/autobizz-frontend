import Profile from "../../components/pages/user/Profile";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>User Info</title>
      </Head>
      <Profile></Profile>
    </>
  );
};

export default index;
