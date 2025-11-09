const fruits = ["Apple", "Banana", "Mango"];
const vegetables = ["Carrot", "Potato", "Tomato"];

// 1 & 2. Merge arrays using spread operator
const Mixed = [...fruits, ...vegetables];

// 3. Make a copy and add one more item
const updatedList = [...Mixed, "Milk"];

console.log(updatedList);
