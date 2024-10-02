const products = [
  { id: 1, name: "Product 1", price: 24.99, image: train-tracks.jpg},
  { id: 1, name: "Product 2", price: 49.99, image: train-tracks.jpg},
  { id: 1, name: "Product 3", price: 19.99, image: train-tracks.jpg},
];
// app.js (add this for the cart view)
function displayCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItems = document.querySelector('.cart-items');
  cartItems.innerHTML = ''; // Clear previous items
  cart.forEach(item => {
    const cartItemHTML = `
      <div class="cart-item">
        <h3>${item.name}</h3>
        <p>$${item.price.toFixed(2)}</p>
      </div>
    `;
    cartItems.innerHTML += cartItemHTML;
  });
}
const checkoutForm = document.getElementById('checkout.form');
checkoutForm.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Order place successfully!");
  localStorage.removeItem('cart');  //clear the cart
});
