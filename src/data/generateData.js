import libraryData from "./library.js";

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
libraryData.forEach(item => {
    const discount = getRndInteger(10, 30);
    item.discount = discount;
    item.currentPrice = item.price - (item.price * discount / 100);
})

const data = libraryData;
export default data;