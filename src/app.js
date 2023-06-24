import { http } from './http.js';
import { ui } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
	getProducts();
	initializareCart();
});

function getProducts() {
	http.get('http://localhost:3000/products').then((data) => {
		ui.showProducts(data);
		ui.getProductsFromCart();
	});
}

export function initializareCart() {
	const cart = JSON.parse(window.localStorage.getItem('cart'));
	if (!cart) {
		window.localStorage.setItem('cart', JSON.stringify([]));
	}
}
document.getElementById('add-product').addEventListener('click', addNewProduct);
function addNewProduct() {
	const titleValue = document.getElementById('title').value;
	const imageValue = document.getElementById('image').value;
	const priceValue = document.getElementById('price').value;
	const descriptionValue = document.getElementById('description').value;
	const stocValue = document.getElementById('stoc').value;
	let product = {
		title: titleValue,
		image: imageValue,
		price: priceValue,
		description: descriptionValue,
		stoc: stocValue,
	};

	http
		.post('http://localhost:3000/products', product)
		.then((data) => getProducts());
}
