# FinalProjectFE

Online ecommerce platform

### Project version

1.0.0

### Author

Grecu Oana

### Project init

`$npm init`

### Install JSON server

`$ npm instal --save json-server`
`$ npm install -g json-server`

### Start Json Server

`$ json-server --watch db.json`

### Using DataBase

`$ npm run start-db`
`$ npm run start`
### Description

Create 4 HTML pages that include JavaScript and CSS elements (separate files) to implement the functionalities required for an e-commerce application (use AJAX technique and map the response received from the server to JavaScript classes):

## index.html - Product List

This page displays a list of products received from the server in JSON format. The request to the server is made using the AJAX technique.

## details.html

This page receives the product's ID as a query parameter (e.g., `details.html?id=0`, where `0` is the product's ID). On this page, the following information will be displayed:

- Product image
- Name
- Description
- Price
- Number of products in stock

Additionally, an "Add to Cart" button will be displayed. When this button is clicked, a message will appear at the top of the screen, notifying the user that the product has been added to the shopping cart. All products added to the cart will be stored in the browser's memory using local storage.

## cart.html

This page reads all the items saved in local storage and displays them in the form of a table. Each row in the table, representing the purchased products, allows several actions:

- Modify the quantity of a product in the cart (increase/decrease)
- Remove a product from the cart through a "Remove" function
- The name of each product in the list contains a link to the product's details page. Whenever the table's content is modified, the total and subtotals will be recalculated.

## admin.html

From the admin page, you can manage the products displayed on the index.html and details.html pages. This page serves as a graphical interface that communicates with a server through AJAX requests, using GET, POST, PUT, and DELETE verbs to add and update the list of available products.

The product table includes columns for product name, and when the user interacts with a product's name, a form for adding/editing products will be displayed on the screen. Each product should contain the following information: image, name, description, price, and stock quantity. Items in the list can be removed from the server using a "Remove" button.
