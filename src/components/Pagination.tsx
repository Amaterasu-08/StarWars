import React from "react";

interface PaginationProps {
  setCurrentPageNumber: (pageNo: number) => void;
  currentPageNumber: number;
  totalData: number;
}

const Pagination: React.FC<PaginationProps> = ({
  setCurrentPageNumber,
  currentPageNumber,
  totalData,
}) => {
  const totalPages = Math.floor(totalData / 10);

  const incrementPage = (pageNo: number) => {
    if (totalPages - 1 > pageNo) {
      setCurrentPageNumber(pageNo + 1); // Increment page number
    }
  };

  const decrementPage = (pageNo: number) => {
    if (1 < pageNo) {
      setCurrentPageNumber(pageNo - 1); // Decrement page number
    }
  };

  const paginationButtons: JSX.Element[] = [];
  for (let i = 1; i < totalPages; i++) {
    paginationButtons[i - 1] = (
      <button
        key={i}
        className={`focus:bg-blue-600 h-10 w-10 flex items-center justify-center transition duration-200 ease-in-out ${
          currentPageNumber === i ? "bg-blue-600 text-white" : "bg-gray-200"
        }`}
        onClick={() => setCurrentPageNumber(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="flex justify-center mt-5">
      <div className="flex shrink">
        {/* Button to decrement page number */}
        <button
          className="rounded-tl rounded-bl bg-gray-200 h-10 w-10 flex items-center justify-center transition duration-100 ease-in-out "
          onClick={() => decrementPage(currentPageNumber)}
        >
          <span>«</span>
        </button>
        {paginationButtons}
        <button
          className="rounded-tr rounded-br bg-gray-200 h-10 w-10 flex items-center justify-center transition duration-100 ease-in-out"
          onClick={() => incrementPage(currentPageNumber)}
        >
          <span>»</span>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
