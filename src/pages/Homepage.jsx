import Banner from "../components/Layouts/Banner";
import library from '../data/library';
import FeaturedBooks from "../components/Featureds/FeaturedBooks";

const Homepage = () => {
    return (
        <div className="homepage-content">
            <div className="banner py-5 bg-white">
                <Banner />
            </div>           
            <div className="featured-books bg-light py-5">
                <FeaturedBooks library={library} />
            </div>           
        </div>

    )
}

export default Homepage