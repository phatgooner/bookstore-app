import BookList from "../components/Lists/BookList";
import data from "../data/generateData";

const Library = () => {
    return (
        <div className="library-content">
            <div className="container library-header py-5 bg-white">
                <h1 className="fw-bold" style={{ fontSize: '3rem' }}>
                    Tìm sách tốt nhất cho bạn
                </h1>
            </div>
            <div className="book-list bg-light">
                <BookList libraryData={data} />
            </div>
        </div>
    )
}

export default Library