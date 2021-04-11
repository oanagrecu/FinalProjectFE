import { http } from './http.js';
import { ui } from './ui.js';

window.onload = () => {
	const id = window.location.search.split('=')[1];
	if (window.location.search !== '') {
		http
			.get(`http://localhost:3000/products/` + id)
			.then((data) => ui.showCartPage(data));
	}
};

// const productId = '';
// let addProduct = document.getElementById('details');

// addProduct.addEventListener('click', saveProductsFromCart);

// function saveProductsFromCart() {
// 	localStorage.setItem('products', productId);
// 	localStorage.setItem('products', product);
// 	localStorage.setItem('products', JSON.strigify(product));
// }
