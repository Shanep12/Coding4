
let products = [
  { name: "Laptop", category: "electronics", price: 1000, inventory: 5 },
  { name: "T-Shirt", category: "apparel", price: 25, inventory: 10 },
  { name: "Apples", category: "groceries", price: 3, inventory: 30 },
  { name: "Detergent", category: "household", price: 8, inventory: 20 },
  { name: "Book", category: "other", price: 15, inventory: 12 }
];


for (let product of products) {
  switch (product.category) {
    case "electronics":
      product.price *= 0.8;
      break;
    case "apparel":
      product.price *= 0.85;
      break;
    case "groceries":
    case "household":
      product.price *= 0.9;
      break;
    default:
      // No discount
      break;
  }
}


let customerTypes = ["regular", "student", "senior"];


for (let i = 0; i < 3; i++) {
  let customerType = customerTypes[i]; // Simulate different customer types
  let cart = [products[0], products[1], products[2]]; // Each buys 3 products
  let total = 0;

  for (let item of cart) {
    total += item.price;
    item.inventory--; // reduce inventory
  }

  if (customerType === "student") {
    total *= 0.95;
  } else if (customerType === "senior") {
    total *= 0.93;
  }

  console.log(`Customer #${i + 1} (${customerType}) - Total: $${total.toFixed(2)}`);
}


let sampleProduct = products[0];
for (let key in sampleProduct) {
  console.log(`${key}: ${sampleProduct[key]}`);
}


for (let [index, product] of Object.entries(products)) {
  const { name, category, price, inventory } = product;
  console.log(`Product ${+index + 1}: ${name}, ${category}, $${price.toFixed(2)}, Inventory: ${inventory}`);
}
