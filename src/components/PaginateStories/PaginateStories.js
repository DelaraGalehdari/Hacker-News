import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./PaginateStories.css";

const PaginateStories = ({ topStoriesIds, handlePage }) => {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const itemsPerPage = 10;
  useEffect(() => {
    // Fetch items based of number of page
    const endOffset = itemOffset + itemsPerPage;
    handlePage(itemOffset, endOffset);
    setCurrentItems(topStoriesIds.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(topStoriesIds.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, topStoriesIds]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % topStoriesIds.length;

    setItemOffset(newOffset);
  };

  return (
    <div>
      <ReactPaginate
        nextLabel=">>"
        previousLabel="<<"
        breakLabel="..."
        forcePage={itemOffset}
        pageCount={pageCount}
        pageRangeDisplayed={3}
        renderOnZeroPageCount={null}
        onPageChange={handlePageClick}
        className="pagination"
        activeClassName="active-page"
        previousClassName="previous-page"
        nextClassName="next-page"
      />
    </div>
  );
};

export default PaginateStories;
