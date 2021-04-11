class UI {
	constructor() {
		this.productsDiv = document.getElementById('products');
		this.detailsDiv = document.getElementById('details');
		this.cartDiv = document.getElementById('shoppingCart');
		this.tableProducts = document.getElementById('tableProducts');
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
		         <div class="card" id="detailsCard">
		            <div class="card__title">
		                <div class="icon"><a href="product.html"><i class="fa fa-arrow-left"></i></a>
		                </div>
		                <h3>Produse</h3>
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
		                    <button id="${product.id}"  class="btn btn-primary stretched-link addToCart">Adauga in cos</></button>

		                    </div>
		                </div>
		            </div>
		        </div>
		    `;

		this.detailsDiv.innerHTML = output;
	}

	showAdminPage(products) {
		let output = '';
		products.forEach((product) => {
			output += `
                 
                    <tr>
                        <td><img src="${product.image}"/></td>
                        <td>${product.title}</td>
                        <td>${product.price}</td>
                        <td>${product.stoc}</td>
                        <td><button id=${product.id} type="button" class="btn btn-sm btn-danger">
                        <i class="fa fa-trash"></i></button> </td>
                    </tr>
            
		 `;
			this.adminPage.innerHTML = output;
		});
	}

	showCartPage(products) {
		let output = '';
		// const productsIdArr = JSON.parse(localStorage.getItem('shoppingCart'));
		// console.log(productsIdArr);
		// let productId = '';
		// for (let i = 0; i <= productsIdArr.length - 1; i++) {
		// 	productId = productsIdArr[i];
		// 	console.log(productId);
		// }
		products.forEach((product) => {
			if (productId === productId) {
				output += `
                            <tbody>
                                <tr>
                                    <td><img src="${product.image}"/></td>
                                    <td>${product.title}</td>
                                    <td>${product.stoc}</td>
                                    <td><input class="form-control" type="text" value="1" /></td>
                                    <td class="text-right">${product.price} RON</td>
                                    <td class="text-right"><button class="btn btn-sm btn-danger"><i
                                                class="fa fa-trash"></i>
                                        </button> </td>
                                </tr>
                                <tr>  
                                    <td><strong>Total</strong></td>
                                    <td class="text-right"><strong>....</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> 
				`;
				this.cartDiv.innerHTML = output;
			}
		});
	}
}

export const ui = new UI();
