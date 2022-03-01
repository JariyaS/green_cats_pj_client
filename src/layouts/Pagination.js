import e from "cors";
import React from "react";

function Pagination({ productsPerpage, totalProducts, paginate }) {
  const pageNumber = [];
  for (let i = 1; i < Math.ceil(totalProducts / productsPerpage); i++) {
    pageNumber.push(i);
  }

  const handleClickPage = (e, x) => {
    e.preventDefault();
    paginate(x); // set current page
  };

  return (
    <nav>
      <ul className="pagination">
        {pageNumber.map((x) => (
          <li key={x} className="page-item">
            <a
              href="!#"
              className="page-link"
              onClick={(e) => handleClickPage(e, x)}
            >
              {x}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
