import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./PaginateStories.css";

const PaginateStories = ({ topStoriesIds, handlePage }) => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    // Fetch items based of number of page
    const endOffset = itemOffset + itemsPerPage;
    handlePage(itemOffset, endOffset);
    setPageCount(Math.ceil(topStoriesIds.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, topStoriesIds]);

  const handlePageClick = (event) => {
    let currentPage = event.selected + 1;
    const newOffset = (currentPage * itemsPerPage) % topStoriesIds.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <ReactPaginate
        nextLabel=">>"
        previousLabel="<<"
        breakLabel="..."
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        renderOnZeroPageCount={null}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default PaginateStories;
