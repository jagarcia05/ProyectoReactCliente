interface PaginationProps {
    page: number;
    totalPages: number;
    setPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, totalPages, setPage }) => {
    return (
        <div className="flex flex-col items-center mt-4">
            <div className="flex justify-center space-x-4 items-center mb-2">
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
            <div className="flex flex-wrap justify-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => setPage(pageNumber)}
                        className={`px-3 py-1 rounded ${page === pageNumber ? 'bg-gray-700' : 'bg-gray-900'} text-white`}
                    >
                        {pageNumber}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Pagination;