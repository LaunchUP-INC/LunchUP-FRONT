import Cards from "../components/Cards/Cards";
import SearchBar from "../components/SearchBar/SearchBar";




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