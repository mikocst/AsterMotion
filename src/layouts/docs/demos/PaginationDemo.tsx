import { useState } from 'react';
import Pagination from '@components/Library/Pagination/Pagination';
import PaginationContent from '@components/Library/Pagination/PaginationContent';
import PaginationPrevious from '@components/Library/Pagination/PaginationPrevious';
import PaginationNext from '@components/Library/Pagination/PaginationNext';

const PaginationDemo = () => {
  const [page, setPage] = useState(1);

  return (
    <Pagination activePage={page} totalPages={12} onPageChange={setPage}>
      <PaginationPrevious />
      <PaginationContent />
      <PaginationNext />
    </Pagination>
  );
};

export default PaginationDemo;
