type Product = {
  name: string;
  price: number;
  category: string;
};
// define array of products
let products: Product[] = [
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

function filterProductByPrice(products: Product[], minPrice: number): Product[] {
  return products.filter(product=> product.price > minPrice);
}

// function discount product for discount 10%
function discountProduct(products: Product[]): Product[]{
  return products.map(product => ({
    ...product, price: product.price * 0.9
  }));
}

// call function
let filterProduct = filterProductByPrice(products, 10000);
let discountOfProduct = discountProduct(filterProduct);

// display results of function
// console.log(filterProduct);
console.log(discountOfProduct);