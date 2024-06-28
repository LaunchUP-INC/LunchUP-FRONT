
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from 'react';
import Cards from "../components/Cards/Cards";
import SearchBar from "../components/SearchBar/SearchBar";
import Pagination from "../components/Pagination/Pagination";


const HomeView = () => {

    const dishes = useSelector((state) => state.allProducts);

    // console.log(dishes);

    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(3);

    //Obtener la cantidad de Cards
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = dishes.slice(indexOfFirstCard, indexOfLastCard);

    console.log('Current Cards: ',currentCards)

    //Cambiar la pagina
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div>
                <SearchBar />
            </div>
            <div>
                <Cards dishes={currentCards}/>
            </div>
            <div>
            <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(dishes.length / cardsPerPage)}
                    onPageChange={paginate}
                    
                />
            </div>
        </div>
    )
}

export default HomeView