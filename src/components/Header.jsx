const Header = ({ selectedImages, handleDelete }) => {
  const isAnyImageSelected = selectedImages.length > 0;

  return (
    <nav className="flex justify-between items-center border-b-2 mb-8">
      <h1 className="my-8 ms-8 font-semibold text-2xl">
        {isAnyImageSelected ? (
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={isAnyImageSelected}
              readOnly
              className="w-5 h-4 mr-2"
            />
            {selectedImages.length} Files Selected
          </label>
        ) : (
          "Gallery"
        )}
      </h1>
      {isAnyImageSelected && (
        <button
          className="text-red-500 text-2xl mx-8 ms-8"
          onClick={handleDelete}
        >
          Delete File
        </button>
      )}
    </nav>
  );
};

export default Header;
