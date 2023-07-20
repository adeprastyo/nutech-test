import CustNavbar from "../components/CustNavbar";
import Container from "../components/Container";
import CustCard from "../components/CustCard";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProduct } from "../redux/slices/productSlice";

export default function Home() {
  const reduxProducts = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://64b9394379b7c9def6c0c568.mockapi.io/products")
      .then((res) => res.json())
      .then((data) => {
        // setProducts(data);
        dispatch(addProduct(data));
      });
  }, []);

  if (reduxProducts === undefined) {
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
          {reduxProducts
            .slice()
            .sort((a, b) => b.id - a.id)
            .map((product) => {
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
