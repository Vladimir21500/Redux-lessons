import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, itemPerPage, totalItems }) => {
  const isNextDisabled = itemPerPage < 3 || totalItems - (currentPage + 1) * 3 <= 0;
  return (
    <div className="pagination">
      <button disabled={currentPage === 0} className="btn" onClick={() => goPrev()}>
        ←
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button disabled={isNextDisabled} className="btn" onClick={() => goNext()}>
        →
      </button>
    </div>
  );
};

export default Pagination;
