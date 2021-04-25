import { http } from './http.js';
import { ui } from './ui.js';
const id = window.location.search.split('=')[1];
window.onload = () => {
	if (window.location.search !== '') {
		http
			.get(`http://localhost:3000/products/` + id)
			.then((data) => ui.showDetailPage(data));

		addEventButton();
		showInCart();
	}
	// document.querySelector('.addToCart').addEventListener('click', function (e) {
	// 	addToCart(id);
	//
	// });
};

function addEventButton() {
	const btn = document.getElementById('details');

	btn.addEventListener('click', function (e) {
		addToCart(id);
	});
}
function addToCart(id) {
	const cart = JSON.parse(window.localStorage.getItem('cart'));
	cart.push(id);
	window.localStorage.setItem('cart', JSON.stringify(cart));
	alert('Produsul a fost adaugat in cos!');
	// ui.changeCartNum();
}

function showInCart() {
	const cartNum = document.getElementById('quantity').value;
	console.log(cartNum);
}
