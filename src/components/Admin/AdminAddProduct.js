import React, { useState } from "react";
import { useRef } from "react";
import axios from "../../config/axios";

function AdminAddProduct() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [pt, setPt] = useState("");
  const [pd, setPd] = useState("");
  const [rh, setRh] = useState("");
  const [img, setImg] = useState("");

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      try {
        const formData = new FormData();
        formData.append("img", img);
        formData.append("brand", brand);
        formData.append("model", model);
        formData.append("pt", pt);
        formData.append("pd", pd);
        formData.append("rh", rh);

        await axios.post("/products", formData);
      } catch (err) {
        console.log(err);
      }
    } catch (err) {
      console.log(err);
    } finally {
    }

    setBrand("");
    setModel("");
    setPt("");
    setPd("");
    setRh("");
    setImg("");
  };
  const handleSelect = (e) => {
    // e.preventDefault();
    console.log(e.target.value);
    setBrand(e.target.value);
  };

  const handleFileUpload = (e) => {
    console.log(e.target.files[0]);
    setImg(e.target.files[0]);
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
              defaultValue={0}
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
              onChange={(e) => {
                setPt(e.target.value);
              }}
            />
            <span className="input-group-text">Pd (Toz)</span>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setPd(e.target.value)}
            />
            <span className="input-group-text">Rh (Toz)</span>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setRh(e.target.value)}
            />
          </div>

          {img && (
            <img
              src={URL.createObjectURL(img)}
              className="img-fluid"
              alt="post-img"
            />
          )}

          <div className="input-group mb-3">
            <input
              type="file"
              className="form-control"
              onChange={handleFileUpload}
            />
          </div>
          <button className="btn btn-primary btn-block">Add new Product</button>
        </form>
      </div>
    </div>
  );
}

export default AdminAddProduct;
