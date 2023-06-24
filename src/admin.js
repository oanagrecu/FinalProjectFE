import { http } from './http.js';
import { ui } from './ui.js';

document.addEventListener('DOMContentLoaded', getProducts);

function getProducts() {
	http
		.get('http://localhost:3000/products')
		.then((data) => ui.showAdminPage(data));
}
document
	.getElementById('tableProducts')
	.addEventListener('click', deleteProduct);

function deleteProduct(e) {
	if (e.target.classList.contains('btn-danger')) {
		const id = e.target.id;
		http
			.delete(`http://localhost:3000/products/${id}`)
			.then((data) => getProducts())
			.catch('Error on delete!');
	}
}
