import React from "react";

function CartItem() {
  return (
    <aside>
      <div>Brand</div>
      <div> Model </div>
      <div> Q'ty </div>
      <div> Amount </div>
      <div>
        <div></div>
        <div>
          <button>+</button>
          <button>-</button>
        </div>
        <div></div>
      </div>

      <hr />

      <div className="row">
        <div className="col-2">Summary Order</div>
      </div>
      <div className="row">
        <div className="col-2">Q'ty(pc.):</div>
        <div className="col-1 text-right"></div>
      </div>
      <div className="row">
        <div className="col-2">Total Amount(THB)</div>
        <div className="col-1 text-right"></div>
      </div>
      <button
        type="submit"
        className="btn btn-success"
        style={{ width: "5%", marginTop: "30px" }}
      >
        Next
      </button>
    </aside>
  );
}

export default CartItem;
