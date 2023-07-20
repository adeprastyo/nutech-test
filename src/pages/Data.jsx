import CustNavbar from "../components/CustNavbar";
import CustTable from "../components/CustTable";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { Button } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/slices/productSlice";

export default function Data() {
  const reduxProducts = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [schemaProduct, setSchemaProduct] = useState({
    nama: "",
    deskripsi: "",
    hargaBeli: "",
    hargaJual: "",
    stok: "",
    urlGambar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYgi08f21tpsK_D4wmGgKr1ix7SgkyxboZNHcvgFqnyD9rYGhirDZCSb5KTf1jo_H9Zd8&usqp=CAU",
  });

  useEffect(() => {
    fetch("https://64b9394379b7c9def6c0c568.mockapi.io/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch(addProduct(data));
      });
  }, []);

  const handleOpenAddModal = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setSchemaProduct({
      nama: "",
      deskripsi: "",
      hargaBeli: "",
      hargaJual: "",
      stok: "",
      urlGambar:
        "data:image/jpeg;base64,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",
    });
    setIsAddModalOpen(false);
  };

  const handleSaveData = () => {
    const newData = {
      nama: schemaProduct.nama,
      deskripsi: schemaProduct.deskripsi,
      hargaBeli: schemaProduct.hargaBeli,
      hargaJual: schemaProduct.hargaJual,
      stok: schemaProduct.stok,
      urlGambar: schemaProduct.urlGambar,
    };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    };

    fetch(
      "https://64b9394379b7c9def6c0c568.mockapi.io/products",
      requestOptions
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add data.");
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
        dispatch(addProduct(result));
        setIsAddModalOpen(false);
      })
      .catch((error) => {
        console.log("Error adding data:", error);
        setIsAddModalOpen(false);
      });
  };

  if (reduxProducts === undefined) {
    return (
      <>
        <CustNavbar />
        <div className="container mx-auto">
          <h1 className="mt-10 font-bold text-3xl text-center">
            Data Products
          </h1>
          <Loading />
        </div>
      </>
    );
  }

  return (
    <>
      <CustNavbar />
      <div className="container mx-auto">
        <h1 className="mt-10 font-bold text-3xl text-center">Data Products</h1>
        <div className="flex justify-end px-5 mt-5">
          <Button color="success" onClick={handleOpenAddModal}>
            Tambah Data
          </Button>
        </div>
        <div className="w-full flex flex-wrap p-5 gap-10 justify-center">
          <CustTable datas={reduxProducts} />
        </div>
      </div>

      {/* Tambah Data Modal Form */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-xl shadow-md w-2/5 p-10">
            <div className="w-full pb-5 text-xl">
              <p>Form to Add Data</p>
            </div>
            <form className="flex-col">
              <div className="w-full flex justify-between mb-5">
                <label htmlFor="namaBarang">Nama Barang</label>
                <input
                  type="text"
                  id="namaBarang"
                  value={schemaProduct.nama}
                  onChange={(e) =>
                    setSchemaProduct({ ...schemaProduct, nama: e.target.value })
                  }
                  className="w-2/3 shadow-sm appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-blue-200"
                />
              </div>
              <div className="w-full flex justify-between mb-5">
                <label htmlFor="deskripsi">Deskripsi</label>
                <textarea
                  id="deskripsi"
                  value={schemaProduct.deskripsi}
                  onChange={(e) =>
                    setSchemaProduct({
                      ...schemaProduct,
                      deskripsi: e.target.value,
                    })
                  }
                  className="w-2/3 shadow-sm appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-blue-200"
                />
              </div>
              <div className="w-full flex justify-between mb-5">
                <label htmlFor="hargaBeli">Harga Beli</label>
                <input
                  id="hargaBeli"
                  type="number"
                  value={schemaProduct.hargaBeli}
                  onChange={(e) =>
                    setSchemaProduct({
                      ...schemaProduct,
                      hargaBeli: e.target.value,
                    })
                  }
                  className="w-2/3 shadow-sm appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-blue-200"
                />
              </div>
              <div className="w-full flex justify-between mb-5">
                <label htmlFor="hargaJual">Harga Jual</label>
                <input
                  id="hargaJual"
                  type="number"
                  value={schemaProduct.hargaJual}
                  onChange={(e) =>
                    setSchemaProduct({
                      ...schemaProduct,
                      hargaJual: e.target.value,
                    })
                  }
                  className="w-2/3 shadow-sm appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-blue-200"
                />
              </div>
              <div className="w-full flex justify-between mb-5">
                <label htmlFor="stok">Stok</label>
                <input
                  id="stok"
                  type="number"
                  value={schemaProduct.stok}
                  onChange={(e) =>
                    setSchemaProduct({
                      ...schemaProduct,
                      stok: e.target.value,
                    })
                  }
                  className="w-2/3 shadow-sm appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-blue-200"
                />
              </div>
              <div className="w-full flex justify-between mb-5">
                <label htmlFor="gambar">Gambar</label>
                <input
                  alt="Skip this field"
                  id="gambar"
                  type="image"
                  className="w-2/3 shadow-sm bg-gray-200 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-blue-200"
                  disabled
                />
              </div>

              <div className="flex justify-end mt-4">
                <Button color="success" onClick={handleSaveData}>
                  Save
                </Button>
                <Button className="ml-2" onClick={handleCloseAddModal}>
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
