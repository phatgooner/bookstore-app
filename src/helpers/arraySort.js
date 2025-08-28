const arraySort = (arr, type) => {
    type === 'price-asc' ? arr.sort((a, b) => a.currentPrice - b.currentPrice) :
        type === 'price-desc' ? arr.sort((a, b) => b.currentPrice - a.currentPrice) :
            type === 'rating-asc' ? arr.sort((a, b) => a.rating - b.rating) :
                type === 'rating-desc' ? arr.sort((a, b) => b.rating - a.rating) :
                    type === 'discount-asc' ? arr.sort((a, b) => a.discount - b.discount) :
                        type === 'discount-desc' ? arr.sort((a, b) => b.discount - a.discount) : arr.sort((a, b) => a.id - b.id)
    return arr;
}

export default arraySort;