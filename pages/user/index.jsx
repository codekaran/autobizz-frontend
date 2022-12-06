import Profile from "../../components/pages/user/Profile";
import Header from "../../components/globals/header/Header";
import Footer from "../../components/globals/footer/Footer";
import Head from "next/head";
import { Main } from "next/document";

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
