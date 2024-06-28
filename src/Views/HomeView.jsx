import Cards from "../components/Cards/Cards";
import SearchBar from "../components/SearchBar/SearchBar";
import Filters from "../components/Filters/Filters";



const HomeView = () => {
    return (
        <div>
            <div>
                <SearchBar />
                <Filters />
            </div>
            <div>
                <Cards />
            </div>
        </div>
    )
}

export default HomeView