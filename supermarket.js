document.addEventListener('DOMContentLoaded', () => {
  const productNameInput = document.getElementById('product-name');
  const productPriceInput = document.getElementById('product-price');
  const productQuantityInput = document.getElementById('product-quantity');
  const addToCartBtn = document.getElementById('add-to-cart-btn');
  const cartItemsList = document.getElementById('cart-items');
  const cartTotalSpan = document.getElementById('cart-total');
  const checkoutBtn = document.getElementById('checkout-btn');

  let cart = [];

  addToCartBtn.addEventListener('click', () => {
    const name = productNameInput.value.trim();
    const price = parseFloat(productPriceInput.value);
    const quantity = parseInt(productQuantityInput.value);

    if (name && !isNaN(price) && price > 0 && !isNaN(quantity) && quantity > 0) {
      const newItem = {
        id: Date.now(),
        name,
        price,
        quantity
      };

      cart.push(newItem);
      updateCartDisplay();
      clearInputFields();
    } else {
      alert('Please enter valid product details.');
    }
  });

  function updateCartDisplay() {
    cartItemsList.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
      const listItem = document.createElement('li');
      listItem.classList.add('cart-item');
      listItem.innerHTML = `
        <span>${item.name} (${item.quantity} x ₹${item.price.toFixed(2)})</span>
        <span>₹${(item.price * item.quantity).toFixed(2)}</span>
        <button class="remove-btn" data-id="${item.id}">Remove</button>
      `;

      cartItemsList.appendChild(listItem);
      total += item.price * item.quantity;
    });

    cartTotalSpan.textContent = total.toFixed(2);
    checkoutBtn.disabled = cart.length === 0;

    document.querySelectorAll('.remove-btn').forEach(button => {
      button.addEventListener('click', function () {
        const itemIdToRemove = parseInt(this.dataset.id);
        cart = cart.filter(item => item.id !== itemIdToRemove);
        updateCartDisplay();
      });
    });
  }

  function clearInputFields() {
    productNameInput.value = '';
    productPriceInput.value = '';
    productQuantityInput.value = '1';
  }

  checkoutBtn.addEventListener('click', () => {
    if (cart.length > 0) {
      alert(`Checkout successful! Total amount: ₹${cartTotalSpan.textContent}`);
      cart = [];
      updateCartDisplay();
    } else {
      alert('Your cart is empty.');
    }
  });
});
