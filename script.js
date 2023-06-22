// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// DOM elements
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list")
const removeList=document.getElementById("remove-from-cart")
let cart = [];

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" onclick="addToCart(${product.id})" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Render cart list
function renderCart() {
	let liHTML = "";
	cart.forEach((product) => {
    liHTML += `<li>${product.name} - $${product.price} <button class="remove-from-cart-btn" onclick="removefromCart(${product.id})" data-id="${product.id}">Remove from Cart</button></li>`;
  });

	 cartList.innerHTML = liHTML;
}

// Add item to cart
function addToCart(productId) {
	 cart.push(products.find((e) => e.id == productId));
	renderCart();
}

// Remove item from cart
function removeFromCart(productId) {
	cart.splice(products.findIndex((index)=> index.id === productId));
renderCart();
	
}

// Clear cart
function clearCart() {
	cart = [];
	renderCart();
}

document.getElementById("clear-cart-btn").addEventListener("click", clearCart);
//document.getElementById("remove-from-cart-btn").addEventListener("click",removeFromCart);
// Initial render
renderProducts();
renderCart();
