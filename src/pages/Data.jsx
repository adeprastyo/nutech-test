import CustNavbar from "../components/CustNavbar";
import CustTable from "../components/CustTable";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { Button } from "flowbite-react";

export default function Data() {
  const [products, setProducts] = useState(undefined);
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
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYgi08f21tpsK_D4wmGgKr1ix7SgkyxboZNHcvgFqnyD9rYGhirDZCSb5KTf1jo_H9Zd8&usqp=CAU",
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

    fetch("http://localhost:3000/products", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add data.");
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setIsAddModalOpen(false);
      })
      .catch((error) => {
        console.log("Error adding data:", error);
        setIsAddModalOpen(false);
      });
  };

  if (products === undefined) {
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
          <CustTable datas={products} />
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
