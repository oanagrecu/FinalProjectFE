class UI {
	constructor() {
		this.productsDiv = document.getElementById('products');
		this.title = document.getElementById('title');
		this.price = document.getElementById('price');
		this.image = document.getElementById('image');
		this.description = document.getElementById('description');
	}
	showProducts(products) {
		let output = '';
		products.forEach((product) => {
			output += `
	<div class="card-deck">	
	<div class="card text-center" style="width:18em;">
	<div class="card-body">
	<img  class = "card-img-top" src = "${product.image}" alt="...">
    <h4 class="card-title">${product.title}</h4>
	<h5 class="card-subtitle">${product.price} RON</h5>
    <p class="card-text">${product.description}</p>
    <button class="btn btn-secondary details"id="${product.id}">Details</button>
    </div>
   </div>
   </div>
    `;
			this.productsDiv.innerHTML = output;
		});
	}
}
export const ui = new UI();
//card m-4 style="width:18em
