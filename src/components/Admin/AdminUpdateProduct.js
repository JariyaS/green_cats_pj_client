import React, { useState } from "react";
import { useRef } from "react";
import axios from "../../config/axios";

function AdminUpdateProduct({ product, loadProduct }) {
  const [brand, setBrand] = useState(product.brandId);
  const [model, setModel] = useState(product.productName);
  const [pt, setPt] = useState(product.ptToz);
  const [pd, setPd] = useState(product.pdToz);
  const [rh, setRh] = useState(product.rhToz);
  // const [img, setImg] = useState("");
  // console.log(product);
  console.log(loadProduct);

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      try {
        const formData = new FormData();
        // formData.append("img", img);
        formData.append("brand", brand);
        formData.append("model", model);
        formData.append("pt", pt);
        formData.append("pd", pd);
        formData.append("rh", rh);

        await axios.patch(`/products/${product.id}`, formData);
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    } finally {
    }
    loadProduct();
    setBrand("");
    setModel("");
    setPt("");
    setPd("");
    setRh("");
    // setImg("");
  };
  const handleSelect = (e) => {
    // e.preventDefault();
    console.log(e.target.value);
    setBrand(e.target.value);
  };

  return (
    <div>
      {/* {JSON.stringify({ brand, model, pt, pd, rh, img })} */}
      <div className="w-75 mx-auto my-3">
        <form onSubmit={handleSubmitForm}>
          <div>
            <label className="form-label text-uppercase mb-2">
              SELECT BRAND :
            </label>
            <select
              className="form-select mb-3"
              aria-label=".form-select-lg example"
              onChange={handleSelect}
              defaultValue={brand}
            >
              <option>Car Brand/Model </option>
              <option value="1">TOYOTA</option>
              <option value="2">HONDA</option>
              <option value="3">ISUZU</option>
              <option value="4">MAZDA</option>
            </select>
          </div>
          <div className=" input-group mb-3">
            <span className="input-group-text">Model Name</span>
            <input
              type="text"
              className="form-control"
              value={model}
              onChange={(e) => {
                setModel(e.target.value);
              }}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Pt (Toz)</span>
            <input
              type="text"
              className="form-control"
              value={pt}
              onChange={(e) => {
                setPt(e.target.value);
              }}
            />
            <span className="input-group-text">Pd (Toz)</span>
            <input
              type="text"
              className="form-control"
              value={pd}
              onChange={(e) => setPd(e.target.value)}
            />
            <span className="input-group-text">Rh (Toz)</span>
            <input
              type="text"
              className="form-control"
              value={rh}
              onChange={(e) => setRh(e.target.value)}
            />
          </div>

          <button className="btn btn-primary btn-block">Update Product</button>
        </form>
      </div>
    </div>
  );
}

export default AdminUpdateProduct;
