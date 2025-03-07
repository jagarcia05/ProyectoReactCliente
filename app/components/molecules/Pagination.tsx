interface PaginationProps {
    page: number;
    nextPage: number | null;
    prevPage: number | null;
    setPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, nextPage, prevPage, setPage }) => {
    return (
        <div className="flex justify-center space-x-4 mt-4">
            <button
                onClick={() => prevPage !== null && setPage(prevPage)}
                disabled={prevPage === null}
                className="px-4 py-2 bg-gray-900 rounded disabled:opacity-50"
            >
                &larr;
            </button>
            <span className="px-4 py-2 bg-gray-900 rounded">Página {page}</span>
            <button
                onClick={() => nextPage !== null && setPage(nextPage)}
                disabled={nextPage === null}
                className="px-4 py-2 bg-gray-900 rounded disabled:opacity-50"
            >
                &rarr;
            </button>
        </div>
    );
};

export default Pagination;
