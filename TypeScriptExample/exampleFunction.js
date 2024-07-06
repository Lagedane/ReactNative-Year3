// create array of person objects
var people = [
    { name: "John Lee", age: 30 },
    { name: "Marry Burner", age: 25 },
    { name: "Harry Kill", age: 35 },
];
// funcyion to filter people who are at least 30 years old
function filterAdults(persons) {
    return persons.filter(function (person) { return person.age >= 30; });
}
// using the function and loggong the resukt
var adults = filterAdults(people);
console.log(adults);
