import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, itemPerPage, totalItems }) => {
  const isPrevDisabled = currentPage === 0;
  const isNextDisabled = itemPerPage < 3 || totalItems - (currentPage + 1) * 3 <= 0;
  return (
    <div className="pagination">
      <button disabled={isPrevDisabled} className="btn" onClick={() => goPrev()}>
        {!isPrevDisabled && `←`}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button disabled={isNextDisabled} className="btn" onClick={() => goNext()}>
        {!isNextDisabled && `→`}
      </button>
    </div>
  );
};

export default Pagination;
