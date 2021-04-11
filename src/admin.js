import { http } from './http.js';
import { ui } from './ui.js';

document.addEventListener('DOMContentLoaded', getProducts);
function getProducts() {
	// const http = new customHTTPMethods();
	http
		.get('http://localhost:3000/products')
		.then((data) => ui.showAdminPage(data));
}

// document
// 	.getElementById('tableProducts')
// 	.addEventListener('click', addNewProduct);

// function addNewProduct() {
// 	const titleValue = document.getElementById('title').value;
// 	const imageValue = document.getElementById('image').value;
// 	const priceValue = document.getElementById('price').value;
// 	const descriptionValue = document.getElementById('description').value;
// 	const stocValue = document.getElementById('stoc').value;

// 	let product = {
// 		title: titleValue,
// 		price: priceValue,
// 		image: imageValue,
// 		description: descriptionValue,
// 		stoc: stocValue,
// 	};
// 	localStorage.setItem('product', JSON.stringify(product));
// 	var retrievedObject = localStorage.getItem('product');
// 	console.log('retrievedObject: ', JSON.parse(retrievedObject));

// 	http
// 		.post('http://localhost:3000/products', product)
// 		.then((data) => getProducts());
// }

// document.getElementById('adminPage').addEventListener('click', deleteProduct);

// function deleteProduct(e) {
// 	if (e.target.classList.contains('danger')) {
// 		const id = e.target.id;
// 		console.log(e.target.id);
// 		http
// 			.delete(`http://localhost:3000/products/${id}`)
// 			.then((data) => getProducts())
// 			.catch('Error on delete!');
// 	}
// }

//   deleteProduct(el) {
//     if (el.classList.contains('danger')) {
//      el.parentElement.parentElement.remove();
//    }
//   };

// showAlert(message, className) {
//     const div = document.createElement('div');
//     div.className = `alert alert-${className}`;
//     div.appendChild(document.createTextNode(message));
//     const container = document.querySelector('#adminPage');
//     const form = document.querySelector('.table');
//     container.insertBefore(div, form);

//     // Vanish in 3 seconds
//     setTimeout(() => document.querySelector('.alert').remove(), 3000);
// }
// ;
//  clearFields() {
//     document.querySelector('#image').value = '';
//     document.querySelector('#title').value = '';
//     document.querySelector('#price').value = '';
//     document.querySelector('#stoc').value = '';
// }
