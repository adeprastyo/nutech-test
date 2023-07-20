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
      <div className="container mx-auto ">
        <h1 className="mt-10 font-bold text-3xl text-center">Products</h1>
        <div className="w-full flex flex-wrap p-5 gap-10 justify-center">
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
        </div>
      </div>
    </>
  );
}
