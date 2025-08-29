import libraryData from "./library.js";

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
libraryData.forEach(item => {
    const discount = getRndInteger(10, 30);
    item.discount = discount;
    item.currentPrice = Math.floor(item.price - (item.price * discount / 100));
    const price = item.price * 26000;
    const currentPrice = item.currentPrice * 26000;
    item.price = price;
    item.currentPrice = currentPrice;
})

const data = libraryData;
export default data;