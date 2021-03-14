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
//ADD PRODUCT TO db

// document.getElementById('add-product').addEventListener('click', addNewProduct);

// function addNewProduct() {
// 	const titleValue = document.getElementById('title').value;
// 	const priceValue = document.getElementById('price').value;
// 	const imageValue = document.getElementById('image').value;
// 	const descriptionValue = document.getElementById('description').value;
// 	let product = {
// 		title: titleValue,
// 		price: priceValue,
// 		image: imageValue,
// 		description: descriptionValue,
// 	};
// 	http
// 		.post('http://localhost:3000/products', product)
// 		.then((data) => getProducts());
// }

// document
// 	.querySelector('.details')
// 	.addEventListener('click', showProductsDetails);
// function showProductsDetails(e) {
// 	console.log(e.target);
// 	if (e.target.classList.contains('details')) {
// 		const id = e.target.id;

// 		http
// 			.detail(`http://localhost:3000/products/${id}`)
// 			.then((data) => getProducts());
// 		// 	.catch('Error on delete');
// 	}
// }

// $('.navTrigger').onclick(function () {
// 	$(this).toggleClass('active');
// 	console.log('Clicked menu');
// 	$('#mainListDiv').toggleClass('show_list');
// 	$('#mainListDiv').fadeIn();
// });
