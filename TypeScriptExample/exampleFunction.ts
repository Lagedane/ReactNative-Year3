interface Person {
  name: string;
  age: number;
}

// create array of person objects
const people: Person[] = [
  { name: "John Lee", age: 30 },
  { name: "Marry Burner", age: 25 },
  { name: "Harry Kill", age: 35 },
];

// funcyion to filter people who are at least 30 years old
function filterAdults(persons: Person[]): Person[] {
  return persons.filter((person) => person.age >= 30);
}

// using the function and loggong the resukt
const adults = filterAdults(people);
console.log(adults);