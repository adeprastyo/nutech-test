import {
  Button,
  Modal,
  Table,
  Checkbox,
  Label,
  TextInput,
} from "flowbite-react";
import { useEffect, useState } from "react";

export default function CustTable({ datas }) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedDataId, setSelectedDataId] = useState(null);

  const [schemaProduct, setSchemaProduct] = useState({
    nama: "",
    deskripsi: "",
    hargaBeli: "",
    hargaJual: "",
    stok: "",
    urlGambar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYgi08f21tpsK_D4wmGgKr1ix7SgkyxboZNHcvgFqnyD9rYGhirDZCSb5KTf1jo_H9Zd8&usqp=CAU",
  });

  // useEffect(() => {
  //   console.log(schemaProduct);
  // }, [schemaProduct]);

  let no = 1;

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
    // Perform data validation here if needed

    // Perform data submission logic here (e.g., via API call) with formData

    // Reset the form data and close the modal
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

  const handleDelete = () => {
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`http://localhost:3000/products/${selectedDataId}`, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete data.");
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
        console.log("Data with ID " + selectedDataId + " has been deleted.");
        setSelectedDataId(null);
        setIsDeleteModalOpen(false);
      })
      .catch((error) => {
        console.log("Error deleting data:", error);
        setSelectedDataId(null);
        setIsDeleteModalOpen(false);
      });
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-end">
          <Button color="success" className="mb-2" onClick={handleOpenAddModal}>
            Tambah Data
          </Button>
        </div>
        <Table hoverable>
          <Table.Head className="text-center">
            <Table.HeadCell>No</Table.HeadCell>
            <Table.HeadCell>Gambar</Table.HeadCell>
            <Table.HeadCell>Nama Barang</Table.HeadCell>
            <Table.HeadCell>Deskripsi</Table.HeadCell>
            <Table.HeadCell>Harga Beli</Table.HeadCell>
            <Table.HeadCell>Harga Jual</Table.HeadCell>
            <Table.HeadCell>Stok</Table.HeadCell>
            <Table.HeadCell>Opsi</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {datas.map((data) => {
              return (
                <Table.Row
                  key={data.id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {no++}
                  </Table.Cell>
                  <Table.Cell>
                    <img className="w-20 h-20" src={data.urlGambar} />
                  </Table.Cell>
                  <Table.Cell>{data.nama}</Table.Cell>
                  <Table.Cell>{data.deskripsi}</Table.Cell>
                  <Table.Cell>{data.hargaBeli}</Table.Cell>
                  <Table.Cell>{data.hargaJual}</Table.Cell>
                  <Table.Cell>{data.stok}</Table.Cell>
                  <Table.Cell>
                    <div className="flex justify-center items-center gap-2">
                      <Button>Edit</Button>
                      <Button
                        color="failure"
                        onClick={() => {
                          setSelectedDataId(data.id);
                          setIsDeleteModalOpen(true);
                        }}
                      >
                        Hapus
                      </Button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>

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

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded shadow-md">
            <p>Apakah Anda yakin ingin menghapus data ini?</p>
            <div className="flex justify-end mt-4">
              <Button color="failure" onClick={handleDelete}>
                Delete
              </Button>
              <Button
                className="ml-2"
                onClick={() => setIsDeleteModalOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
