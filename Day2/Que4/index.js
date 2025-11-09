const products = [
  { name: "Laptop", price: 50000 },
  { name: "Mobile", price: 20000 },
  { name: "Tablet", price: 30000 }
];
const updatedProducts = products.map(product => ({
  name: product.name,
  price: product.price * 1.1
}));

console.log(updatedProducts);

