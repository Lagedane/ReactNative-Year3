// set enum variables for product's status
var ProductStatus;
(function (ProductStatus) {
    ProductStatus["Available"] = "Available";
    ProductStatus["OutOfStock"] = "OutOfStock";
    ProductStatus["Discontinued"] = "Discontinued";
})(ProductStatus || (ProductStatus = {}));
// array using by any
var products = [
    { name: "Laptop", status: ProductStatus.Available, price: 1200 },
    { name: "Smartphone", status: ProductStatus.OutOfStock, price: 700 },
    { name: "Tablet", status: ProductStatus.Discontinued, price: 300 },
];
// function for display product's detail
function displayProductDetails(productdetail) {
    productdetail.forEach(function (product) {
        console.log("Product: ".concat(product.name, ", Price: ").concat(product.price));
    });
}
displayProductDetails(products);
