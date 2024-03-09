let quantities = { 1: 1 }; // Track item quantities
let likes = { 1: false }; // Track liked items
let total = 10; // Initial total price

function changeQuantity(itemId, amount) {
  quantities[itemId] = (quantities[itemId] || 0) + amount;
  updateUI();
}

function toggleLike(itemId) {
  likes[itemId] = !likes[itemId];
  updateUI();
}

function deleteItem(itemId) {
  delete quantities[itemId];
  delete likes[itemId];
  updateUI();
}

function updateUI() {
  let cart = document.getElementById('cart');
  let totalElement = document.getElementById('total');
  let totalAmount = 0;

  Object.keys(quantities).forEach(itemId => {
    let quantityElement = document.getElementById(`quantity${itemId}`);
    let priceElement = document.querySelector(`.item[data-id="${itemId}"] .price`);
    
    quantityElement.textContent = quantities[itemId];
    priceElement.textContent = `$${quantities[itemId] * 10}`;
    
    totalAmount += quantities[itemId] * 10;
  });

  totalElement.textContent = `Total: $${totalAmount}`;
}
