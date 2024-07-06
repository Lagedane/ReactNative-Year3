type Product = {
  name: string;
  price: number;
  category: string;
};
// set array of products
let products: Product[] = [
  { name: "Laptop", price: 50000, category: "Electronics" },
  { name: "Shirt", price: 1200, category: "Apparel" },
  { name: "Coffee Maker", price: 2500, category: "Appliances" },
];

function filterProduct(minPrice: number): Product[] {
  return products
    .filter((product) => product.price > minPrice)
    .map((product) => ({
      ...product,
      price: product.price * 0.9,
    }));
}

const minPrice = 2000;
const finalPrice = filterProduct(minPrice);

console.log(finalPrice);
