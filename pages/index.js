import { useState } from "react";
import Head from "next/head";
import style from "./styles/index.module.scss";
import Card from "../components/Card";
import Header from "../components/Header";
import { useProducts } from "hooks/useProducts";

export default function Home() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error, isFetching } = useProducts(page);

  const products = data?.products || []; // Produtos da página
  const metadata = data?.metadata;

  const handleLoadMore = () => {
    let newPage = page + 1;
    setPage(newPage);
  };

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Falha ao realizar a requisição</div>;

  return (
    <>
      <Head>
        <title>Starsoft</title>
      </Head>
      <Header />
      <div className={style.container}>
        {data &&
          products.map((product) => <Card key={product.id} data={product} />)}
      </div>
      <div className={style.buttonContainer}>
        <button
          onClick={handleLoadMore}
          disabled={isFetching || !metadata?.hasNextPage}
        >
          {isFetching
            ? "Carregando"
            : metadata?.hasNextPage
              ? "Carregar mais"
              : "Você já viu tudo"}
        </button>
      </div>
    </>
  );
}
