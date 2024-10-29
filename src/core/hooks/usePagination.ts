import { useState } from 'react';

interface UsePaginationProps {
  totalResults?: number;
  perPage?: number;
}

const usePagination = ({
  totalResults = 0,
  perPage = 10,
}: UsePaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalResults / perPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const junmpToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return { nextPage, prevPage, junmpToPage, currentPage, totalPages };
};

export { usePagination };
