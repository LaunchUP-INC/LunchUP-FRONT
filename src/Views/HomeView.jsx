import { useEffect } from "react";
import { fetchProducts } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import Cards from "../components/Cards/Cards";
import SearchBar from "../components/SearchBar/SearchBar";
import Pagination from "../components/Pagination/Pagination";
import Filters from "../components/Filters/Filters";

const HomeView = () => {
  const dispatch = useDispatch();

  const dishes = useSelector((state) => state.filteredProducts);
  console.log(dishes);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(3);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  //Obtener la cantidad de Cards
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = dishes.slice(indexOfFirstCard, indexOfLastCard);

  console.log("Current Cards: ", currentCards);

  //Cambiar la pagina
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div>
        <SearchBar />
        <Filters />
      </div>
      <div>
        <Cards dishes={currentCards} />
      </div>
      <div className="pagination">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(dishes.length / cardsPerPage)}
          onPageChange={paginate}
        />
      </div>
    </div>
  );
};

export default HomeView;
