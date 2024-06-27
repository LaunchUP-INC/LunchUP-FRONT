import Cards from "../components/Cards/Cards";
import SearchBar from "../components/SearchBar/SearchBar";
import Nav from "../components/Nav/Nav";



const HomeView = () => {
    return (
        <div>
            <div>
                <SearchBar />
            </div>
            <div>
                <Cards />
            </div>
        </div>
    )
}

export default HomeView