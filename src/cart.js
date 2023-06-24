import { http } from './http.js';
import { ui } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
  http.get('http://localhost:3000/products').then(data => {
    ui.showProductsInCart(data);
    ui.changeCartNum();
    deleteProductInCart();
    cartTotal();
  });
});
document.getElementById('cart-table-products').addEventListener('click', deleteProductInCart);

function deleteProductInCart(e) {
  if (e.target.classList.contains('btn-danger')) {
    e.target.parentElement.parentElement.remove();
    const id = e.target.id;
    const productsList = JSON.parse(localStorage.getItem('cart'));
    for (let i = 0; i < productsList.length; i++) {
      if (productsList[i] === id) {
        productsList.splice(i, 1);
        localStorage.setItem('cart', JSON.stringify(productsList));
      }
    }
    
  }
cartTotal();
}

function cartTotal() {
  let cartContainer = document.querySelector('.cart-table');
  let cartRows = cartContainer.querySelectorAll('.table-row-cart');
  let total = 0;
  for (let i = 0; i < cartRows.length; i++) {
    let productPrice = cartRows[i].querySelector('.product-price');
    let productQuantity = cartRows[i].querySelector('.quantity-input');
    let subtotal = cartRows[i].querySelector('#subtotal');
    let price = parseFloat(productPrice.innerText.replace('RON', ''));
    let quantity = parseInt(productQuantity.value);
    let rowTotal = price * quantity;
    subtotal.innerText = rowTotal + ' RON';
    total += rowTotal;
  }
  let cartTotalElement = document.querySelector('#totalPrice');
  cartTotalElement.innerText = total + ' RON';
}

document
	.getElementById('cart-table-products')
	.addEventListener('click', deleteProductInCart);
