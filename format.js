module.exports = function(price, currency) {
    const formattedPrice = new Intl.NumberFormat('uz-UZ', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
    }).format(price);

    return formattedPrice;
}