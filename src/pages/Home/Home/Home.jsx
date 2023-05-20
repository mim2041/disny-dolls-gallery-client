import useTitle from "../../../Hooks/UseTitle";
import Banner from "../Banner/Banner";
import Develop from "../Develop/Develop";
import Gallery from "../Gallery/Gallery";
import SubCategory from "../SubCategory/SubCategory";


const Home = () => {
    useTitle("Home");

    return (
        <div>
            <Banner></Banner>
            <Develop></Develop>
            <Gallery></Gallery>
            <SubCategory></SubCategory>
        </div>
    );
};

export default Home;