var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// set array of products
var products = [
    { name: "Laptop", price: 50000, category: "Electronics" },
    { name: "Shirt", price: 1200, category: "Apparel" },
    { name: "Coffee Maker", price: 2500, category: "Appliances" },
];
function filterProduct(minPrice) {
    return products
        .filter(function (product) { return product.price > minPrice; })
        .map(function (product) { return (__assign(__assign({}, product), { price: product.price * 0.9 })); });
}
var minPrice = 2000;
var finalPrice = filterProduct(minPrice);
console.log(finalPrice);
