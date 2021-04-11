import { http } from './http.js';
import { ui } from './ui.js';

window.onload = () => {
	const id = window.location.search.split('=')[1];
	if (window.location.search !== '') {
		//  console.log(id);
		http
			.get(`http://localhost:3000/products/` + id)
			.then((data) => ui.showDetailPage(data));
	}
};

document.getElementById('details').addEventListener('click', addToCart);

function addToCart(e) {
	let product = [];
	if (e.target.classList.contains('addToCart')) {
		const id = e.target.id;

		//  localStorage.setItem('products', 'id');
		localStorage.setItem('product', 'product');
		// localStorage.setItem('data', JSON.stringify(product));
	}
}
