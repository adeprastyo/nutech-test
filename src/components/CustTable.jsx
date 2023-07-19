import { Button, Table } from "flowbite-react";
import { useState } from "react";
import CustAlert from "./CustAlert";

export default function CustTable({ datas }) {
  let no = 1;
  const [showAlert, setShowAlert] = useState(false);
  return (
    <>
      {showAlert && <CustAlert />}
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
                        setShowAlert(true);
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
    </>
  );
}
