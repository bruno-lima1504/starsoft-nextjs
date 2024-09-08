import Head from "next/head";
import style from "./styles/index.module.scss";
import Card from "../components/Card";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Starsoft</title>
      </Head>
      <Header />
      <div className={style.container}>
        <Card />
      </div>
    </>
  );
}
