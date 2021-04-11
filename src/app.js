//  get products on DOM load
import { http } from './http.js';
import { ui } from './ui.js';
document.addEventListener('DOMContentLoaded', getProducts);

function getProducts() {
	// const http = new customHTTPMethods();
	http
		.get('http://localhost:3000/products')
		.then((data) => ui.showProducts(data));
}

// $('.navTrigger').onclick(function () {
// 	$(this).toggleClass('active');
// 	console.log('Clicked menu');
// 	$('#mainListDiv').toggleClass('show_list');
// 	$('#mainListDiv').fadeIn();
// });
