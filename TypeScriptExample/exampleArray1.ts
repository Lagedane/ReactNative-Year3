// Create and access array
let numbers: number[] = [10, 20, 30, 40, 50];
console.log(numbers[2]); //30

// Use loop with array
let names: string[] = ["Riew", "Potter", "Phat"];
for (let name of names) {
  console.log(name);
}

// Push and pop in array
let fruits: string[] = ["Apple", "Banana"];
fruits.push('Cherry');
console.log(fruits);
fruits.pop();
console.log(fruits);
