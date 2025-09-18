import { HiChevronLeft, HiChevronRight } from "react-icons/hi";



interface PaginationProps {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
}

export default function Pagination({ page, totalPages, setPage }: PaginationProps) {
  return (
    <div className="flex justify-center items-center gap-4 my-6">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="px-3 py-1 rounded bg-blue-400 disabled:opacity-50 flex"
      >
        <HiChevronLeft size={24} /> Prev
      </button>
      <span>{page} / {totalPages}</span>
      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className="px-3 py-1 rounded bg-blue-400 disabled:opacity-50 flex"
      >
        Next<HiChevronRight size={24} />
      </button>
    </div>
  );
}
