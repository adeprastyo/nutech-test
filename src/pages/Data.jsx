import CustNavbar from "../components/CustNavbar";
import Container from "../components/Container";
import CustTable from "../components/CustTable";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

export default function Data() {
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
        <Container title="Data Products">
          <Loading />
        </Container>
      </>
    );
  }

  return (
    <>
      <CustNavbar />
      <Container title="Data Products">
        <CustTable datas={products} />
      </Container>
    </>
  );
}
