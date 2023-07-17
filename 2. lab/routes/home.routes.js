var express = require('express');
var router = express.Router();
const mydata = require('../data/mydata');
const data = mydata;
const kategorije = ["Piletina", "Puretina", "Svinjetina", "Junetina", "Oslić", "Lignja", "Riblji štapići", "Roštilj", "Sirevi", "Povrće"];



router.get('/', function(req, res, next) {
    const category = data.categories[0];
    const piletinaProducts = category.products;
    const categoryName = category.name;
    categoryItems = piletinaProducts;
    const cart = req.session.cart || [];
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    res.render('home', {
        title: 'Home',
        categories: kategorije,
        categoryItems:categoryItems,
        categoryName:categoryName,
        totalItems: totalItems
    });
});

router.get ("/getProducts/:id([0-9]{1,10})", function (req, res, next) {
    const categoryId = parseInt(req.params.id);
    const category = data.categories[categoryId];
    const categoryName = category.name;
    const cart = req.session.cart || [];
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  
    if (category) {
      const categoryItems = category.products;
      return res.render("home", {
        categoryItems: categoryItems,
        categories: kategorije,
        categoryName: categoryName,
        totalItems: totalItems
     });
    } else {
      // Handle invalid category ID
      return res.status(404).send("Category not found");
    }
  });

  router.post("/add", function(req, res, next) {
    const productName = req.body.productName;

    const cart = req.session.cart || [];
    const existingItem = cart.find(item => item.name === productName);
  
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ name: productName, quantity: 1 });
    }
    req.session.cart = cart;
  
    res.sendStatus(200);
  });

  router.post('/remove/:productName', function(req, res, next) {
    const productName = req.params.productName;
    const cart = req.session.cart || [];
    const index = cart.findIndex(item => item.name === productName);
    if (index !== -1) {
      if (cart[index].quantity === 1) {
        cart.splice(index, 1);
      } else {
        cart[index].quantity--;
      }
    }
  
    req.session.cart = cart;
  
    res.redirect('/');
  });




module.exports = router;