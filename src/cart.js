import { http } from './http.js';
import { ui } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
	http.get('http://localhost:3000/products').then((data) => {
		ui.showProductsInCart(data);
		ui.changeCartNum();
		deleteProductInCart();
		cartTotal();
	});
});
document
	.getElementById('cart-table-products')
	.addEventListener('click', deleteProductInCart);

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
	var i;
	let cartContainer = document.querySelectorAll('.cart-table')[0];
	let cartRows = cartContainer.querySelectorAll('.table-row-cart');

	for (let i = 0; i <= cartRows.length - 1; i++) {
		var total = 0;
		let cartRow = cartRows[i];
		let productPrice = document.getElementsByClassName('product-price')[0];
		let productQuantity = document.getElementsByClassName('quantity-input')[0];
		let price = parseFloat(productPrice.innerText.replace('RON', ''));
		var quantity = productQuantity.value;

		total = price * quantity;
	}
	var subtotal = document.getElementById('subtotal');
	subtotal.innerText = total + '' + 'RON';
}
