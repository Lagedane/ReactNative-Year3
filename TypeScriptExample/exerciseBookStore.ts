interface Book {
  title: string;
  genre: "fiction" | "non-fiction" | "educational";
  price: number;
}

const books: Book[] = [
  { title: "The Great Gatsby", genre: "fiction", price: 320 },
  { title: "War and Peace", genre: "fiction", price: 250 },
  { title: "Economics 101", genre: "educational", price: 480 },
  { title: "In Cold Blood", genre: "non-fiction", price: 300 },
  { title: "The Catcher in the Rye", genre: "fiction", price: 400 },
];

function filterBookByGenre(books: Book[]): Book[] {
  return books
    .filter((book) => book.genre === "fiction" && book.price > 300)
    .map((book) => ({ ...book, price: book.price * 0.9 }));
}

// call function
let filterBook = filterBookByGenre(books);

// display results of function
// console.log(filterProduct);
console.log(filterBook);
