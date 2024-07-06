// set enum variables for product's status
enum ProductStatus {
  Available = "Available",
  OutOfStock = "OutOfStock",
  Discontinued = "Discontinued",
}

// array using by any
let products: any[] = [
  { name: "Laptop", status: ProductStatus.Available, price: 1200 },
  { name: "Smartphone", status: ProductStatus.OutOfStock, price: 700 },
  { name: "Tablet", status: ProductStatus.Discontinued, price: 300 },
];

// function for display product's detail
function displayProductDetails(productdetail: any[]) {
  productdetail.forEach((product) => {
    console.log(`Product: ${product.name}, Price: ${product.price}`);
  });
}

displayProductDetails(products);
