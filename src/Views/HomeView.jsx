import { useEffect, useState, useCallback } from "react";
import { toast } from "react-toastify";
import { Alert, Container } from 'react-bootstrap';
import { fetchProducts, clearError } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import Cards from "../components/Cards/Cards";
import Filters from "../components/Filters/Filters";
import Loader from "../components/Loader/Loader";
import PaginationComponent from "../components/Pagination/Pagination";

const HomeView = () => {
  const dispatch = useDispatch();

  const dishes = useSelector((state) => state.allProducts); 
  const error = useSelector((state) => state.error);
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(3);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true); 
      await dispatch(fetchProducts());
      setLoading(false); 
    };
    loadProducts();
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  useEffect(() => {
    const dishesToShow = dishes.filter((dish) => dish.isDeleted === false)
    setFilteredDishes(dishesToShow);
  }, [dishes]);

  const handleFilterChange = useCallback((filters) => {
    const { name, type, price } = filters;
    let filtered = [...dishes];

    if (price === "price-asc") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (price === "price-desc") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }

    if (name) {
      filtered = filtered.filter((dish) =>
        dish.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    if (type !== "0") {
      filtered = filtered.filter((dish) => dish.Meal_Types.some((meal) => meal.id === parseInt(type)));
    }

    setFilteredDishes(filtered);
    setCurrentPage(1); 
  }, [dishes]);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredDishes.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Filters onFilterChange={handleFilterChange} />
      <div>
        {filteredDishes.length > 0 ? (
          <Cards dishes={currentCards} />
        ) : (
          <Container className="mt-4">
            <Alert variant="warning" className="text-center">
              No se encontraron platos.
            </Alert>
          </Container>
        )}
      </div>
      <div className="pagination">
        <PaginationComponent
          currentPage={currentPage}
          totalPages={Math.ceil(filteredDishes.length / cardsPerPage)}
          onPageChange={paginate}
        />
      </div>
    </div>
  );
};

export default HomeView;
