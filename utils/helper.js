export const getDiscountedPricePercentage =(orignalPrice, discountedPrice) => {
    const discount = orignalPrice - discountedPrice;
    const discountPercentage = (discount / orignalPrice) * 100;

    return discountPercentage.toFixed(2)
}