import Link from "next/link";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages).keys()].map((num) => num + 1);
  // const pageNumbers = [...Array(nPages).keys()].slice(1);

  const goToPrevPage = () => {
    if(currentPage !== 1)
      setCurrentPage(currentPage - 1)
  }

  const goToNextPage = () => {
    if(currentPage !== nPages)
      setCurrentPage(currentPage + 1)
  }

  return (
    <nav>
      <div className="nav-links">
        <ul className="rbt-pagination">
          <li className={currentPage === 1 ? "disabled" : ""}>
            <Link
              href="#"
              aria-label="Previous"
              onClick={() => goToPrevPage()}
            >
              <i className="feather-chevron-left" />
            </Link>
          </li>

          {pageNumbers.map((num) => (
            <li key={num} className={currentPage === num ? "active" : ""}>
              <Link href="#" onClick={() => setCurrentPage(num)}>
                {num}
              </Link>
            </li>
          ))}

          <li className={currentPage === nPages ? "disabled" : ""}>
            <Link href="#" aria-label="Next" onClick={() => goToNextPage()}>
              <i className="feather-chevron-right" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Pagination;
