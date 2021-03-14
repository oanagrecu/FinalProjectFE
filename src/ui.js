class UI {
	constructor() {
		this.productsDiv = document.getElementById('products');
		this.detailsDiv = document.getElementById('details');
		this.adminPage = document.getElementById('adminPage');
		this.title = document.getElementById('title');
		this.price = document.getElementById('price');
		this.image = document.getElementById('image');
		this.description = document.getElementById('description');
		this.stoc = document.getElementById('stoc');
	}
	showProducts(products) {
		let output = '';
		products.forEach((product) => {
			output += `
	<div class="card-deck ">	
	<div class="card m-4 text-center" style="width:18em;">
	<div class="card-body">
	<img  class = "card-img-top" src = "${product.image}" alt="...">
    <h4 class="card-title">${product.title}</h4>
	<h5 class="card-subtitle">${product.price} RON</h5>
    <p class="card-text">${product.description}</p>
    <a href="details.html?id=${product.id}" class="btn btn-primary stretched-link" details>Detalii</a>
	</div>
   </div>
   </div>
    `;
			this.productsDiv.innerHTML = output;
		});
	}

	showDetailPage(product) {
		let output = '';
		output = `
		         <div class="card">
		            <div class="card__title">
		                <div class="icon"><a href="product.html"><i class="fa fa-arrow-left"></i></a>
		                </div>
		                <h3>New products</h3>
		            </div>
		            <div class="card__body">
		                <div class="half">
		                    <div class="featured_text">
		                        <h3>MARA OPTIC</h3>
		                        <p class="sub">${product.title}</p>
		                        <p class="price">${product.price} RON</p>
		                    </div>
		                    <div class="image">
		                        <img src="${product.image}" alt="...">
		                    </div>
		                </div>
		                <div class="half">
		                    <div class="description">
		                        <p class="card-text">${product.description}</p>
		                    </div>
		                    <span class="stock"><i class="fa fa-pen"></i> In stock: ${product.stoc} </span>
		                    <div class="card__footer">
		                        <div class="action">
		                    <button id="${product.id}" class="btn btn-primary stretched-link ">Adauga in cos</></button>

		                    </div>
		                </div>
		            </div>
		        </div>
		    `;

		this.detailsDiv.innerHTML = output;
	}

	// showAdminPage() {
	// 	let output = '';
	// 	output = `
	// 	`;

	// 	this.adminPage.innerHTML = output;
	// }
}
export const ui = new UI();
