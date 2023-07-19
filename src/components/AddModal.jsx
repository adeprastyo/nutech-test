import React from "react"; // Import React

// Rest of your component code...

// Add Data Modal
export default function AddModal({ isOpen, onClose, onSave }) {
  return (
    // Use a div as the modal container and conditionally render it based on isOpen
    <div
      className={
        isOpen
          ? "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          : "hidden"
      }
    >
      <div className="bg-white p-4 rounded shadow-md">
        <p>Form to Add Data:</p>
        {/* Form to capture data */}
        <form>
          <label htmlFor="nama">Nama Barang:</label>
          <input
            type="text"
            id="nama"
            value={formData.nama}
            onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
          />

          <label htmlFor="deskripsi">Deskripsi:</label>
          <textarea
            id="deskripsi"
            value={formData.deskripsi}
            onChange={(e) =>
              setFormData({ ...formData, deskripsi: e.target.value })
            }
          />

          {/* Add other form fields for hargaBeli, hargaJual, and stok */}

          <div className="flex justify-end mt-4">
            <Button color="success" onClick={onSave}>
              Save
            </Button>
            <Button className="ml-2" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
