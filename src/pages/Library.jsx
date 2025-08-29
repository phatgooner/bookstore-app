import BookList from "../components/Lists/BookList";
import data from "../data/generateData";
import StatBar from "../components/StatBar/Statbar";

const Library = () => {
    return (
        <div className="library-content">
            <div className="book-list bg-light">
                <div className="container library-header pt-2">
                    <h1 className="fw-bold" style={{ fontSize: '3rem' }}>
                        Catalog Sản phẩm
                    </h1>
                    <p>Quản lý giá và xuất ESL cho các sản phẩm</p>
                    <StatBar />
                </div>
                <BookList libraryData={data} />
            </div>
        </div>
    )
}

export default Library