import { Button } from "flowbite-react";

export default function DeleteModal() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-md">
        <p>Apakah Anda yakin ingin menghapus data ini?</p>
        <div className="flex justify-end mt-4">
          <Button color="failure" onClick={handleDelete}>
            Delete
          </Button>
          <Button className="ml-2" onClick={() => setIsDeleteModalOpen(false)}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}
