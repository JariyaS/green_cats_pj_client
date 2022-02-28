import React from "react";

function SearchCatalogue() {
  return (
    <div>
      <label class="form-label text-uppercase mb-2">
        SEARCH YOUR REFERENCES :
      </label>
      <select
        class="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
      >
        <option selected>Car Brand/Model </option>
        <option value="1">TOYOTA</option>
        <option value="2">HONDA</option>
        <option value="3">ISUZU</option>
        <option value="4">MAZDA</option>
        <option value="4">OTHERS</option>
      </select>
    </div>
  );
}

export default SearchCatalogue;
