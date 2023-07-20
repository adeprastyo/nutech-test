import { Button, Table } from "flowbite-react";
import { useState } from "react";

export default function CustTable({ datas }) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedDataId, setSelectedDataId] = useState(null);
  let no = 1;
  const [productDatas, setProductDatas] = useState(datas);

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
        const updatedProductDatas = productDatas.filter(
          (product) => product.id !== selectedDataId
        );
        setProductDatas(updatedProductDatas);
      })
      .catch((error) => {
        console.log("Error deleting data:", error);
        setSelectedDataId(null);
        setIsDeleteModalOpen(false);
      });
  };

  return (
    <>
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
          {productDatas.map((data) => {
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

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-7 rounded-lg shadow-md">
            <p>Apakah anda yakin ingin menghapus data ini?</p>
            <div className="flex justify-end mt-7">
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
