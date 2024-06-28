import style from './Pagination.module.css';

const Pagination = ({currentPage, totalPages, onPageChange}) => {

    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
    }

    return (
        <div className={style.container}>
            <nav className={style.paginationContainer}>
                <ul className={style.pagination}>

                    {pageNumbers.map ((number) => (
                        <li key={number} className={style.pageItem}>
                            <button
                                onClick={() => onPageChange(number)}
                                className={`${style.pageLink} ${number === currentPage ? style.active : ''}`}
                            >
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
            </div>
    )
}

export default Pagination;
