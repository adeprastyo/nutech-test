import CustNavbar from "../components/CustNavbar";
import Container from "../components/Container";
import CustCard from "../components/CustCard";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

export default function Home() {
  const [products, setProducts] = useState(undefined);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  if (products === undefined) {
    return (
      <>
        <CustNavbar />
        <Container>
          <Loading />
        </Container>
      </>
    );
  }

  return (
    <>
      <CustNavbar />
      <Container title="Products">
        {products.map((product) => {
          return (
            <CustCard
              key={product.id}
              name={product.nama}
              desc={product.deskripsi}
              price={product.hargaJual}
              imgUrl={product.urlGambar}
            />
          );
        })}
      </Container>
    </>
  );
}
