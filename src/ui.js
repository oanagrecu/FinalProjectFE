class UI {
  constructor() {
    this.productsDiv = document.getElementById('products');
    this.detailsDiv = document.getElementById('details');
    this.cartDiv = document.getElementById('shoppingCart');
    this.tableProducts = document.getElementById('tableProducts');
    this.cartTable = document.getElementById('cart-table-products');
    this.tableRowCart = document.getElementById('table-row-cart');
    this.title = document.getElementById('title');
    this.price = document.getElementById('price');
    this.image = document.getElementById('image');
    this.description = document.getElementById('description');
    this.stoc = document.getElementById('stoc');
    this.cartItems = document.getElementById('cartItems');
  }
  showProducts(products) {
    let output = '';
    products.forEach(product => {
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
      ui.changeCartNum();
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
		                        <p class="product-price">${product.price} RON</p>
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
		                    <button id="${product.id}"  class="bag-btn btn-primary stretched-link addToCart" type="button">Adauga in cos</></button>

		                    </div>
		                </div>
		            </div>
		        </div>
		    `;

    this.detailsDiv.innerHTML = output;
    ui.changeCartNum();
  }
  showAdminPage(products) {
    let output = '';
    products.forEach(product => {
      output += `
                    <tr>
                        <td><img src="${product.image}" height=80px, width=80px /></td>
                        <td>${product.title}</td>
                        <td>${product.price}</td>
                        <td>${product.stoc}</td>
                        <td class="text-right"><button id=${product.id} type="button" class="btn btn-sm btn-danger">
                        <i class="fa fa-trash"></i></button> </td>
                    </tr>
		 `;
      this.tableProducts.innerHTML = output;
      ui.changeCartNum();
    });
  }
  showProductsInCart(products) {
    const cart = JSON.parse(window.localStorage.getItem('cart'));
    let output = '';
    let productId = '';

    for (let i = 0; i <= cart.length - 1; i++) {
      productId = cart[i];
      console.log(productId);
      products.forEach(product => {
        if (productId == product.id) {
          output += `
          <tr class="table-row-cart">
					<td><img src="${product.image}" height=42px, width=42px/></td>
					<td> <a href="details.html?id=${product.id}"> ${product.title}</a></td>
					<td id="stoc">${product.stoc}</td>
					<td><input class="form-control quantity-input" type="number" min="1" max="${product.stoc}" value=""></></td>
					<td class="product-price text-right ">${product.price} RON</td>
					<td class="text-right" id="subtotal">RON</td>
					<td class="text-right"><button class="btn btn-sm btn-danger" id="${product.id}"><i
								class="fa fa-trash"></i>
						</button> </td>
				</tr>
				`;
        }
        this.cartTable.innerHTML = output;
        ui.changeCartNum();
      });
    }
  }
  changeCartNum() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    let counter = 0;
    for (let i = 0; i < cart.length + 1; i++) {
      this.cartItems.innerHTML = counter++;
    }
  }
}

export const ui = new UI();
