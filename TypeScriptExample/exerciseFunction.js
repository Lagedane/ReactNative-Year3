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
// define array of products
var products = [
    { name: "Laptop", price: 50000, category: "Electronics" },
    { name: "Shirt", price: 1200, category: "Apparel" },
    { name: "Coffee Maker", price: 2500, category: "Appliances" },
];
// function filterProductByPrice(minPrice: number): Product[] {
//   return products
//     .filter((product) => product.price > minPrice)
//     .map((product) => ({
//       ...product,
//       price: product.price * 0.9,
//     }));
// }
// let minPrice = 2000;
// let finalPrice = filterProductByPrice(minPrice);
// console.log(finalPrice);
function filterProductByPrice(products, minPrice) {
    return products.filter(function (product) { return product.price > minPrice; });
}
// function discount product for discount 10%
function discountProduct(products) {
    return products.map(function (product) { return (__assign(__assign({}, product), { price: product.price * 0.9 })); });
}
var filterProduct = filterProductByPrice(products, 10000);
var discountOfProduct = discountProduct(filterProduct);
console.log(filterProduct);
console.log(discountOfProduct);
