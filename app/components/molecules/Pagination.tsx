interface PaginationProps {
    page: number;
    totalPages: number;
    setPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, totalPages, setPage }) => {
    return (
        <div className="flex justify-center space-x-4 mt-4 items-center">
            <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                className="px-4 py-2 bg-gray-900 rounded disabled:opacity-50"
            >
                &larr;
            </button>
            <span className="px-4 py-2 bg-gray-900 rounded">
                Página {page} de {totalPages}
            </span>
            <button
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
                className="px-4 py-2 bg-gray-900 rounded disabled:opacity-50"
            >
                &rarr;
            </button>
        </div>
    );
};

export default Pagination;
