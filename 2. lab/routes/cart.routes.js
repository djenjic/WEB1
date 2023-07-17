var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next) {
    const cart = req.session.cart || [];
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    return res.render("cart", {
      title: "Cart",
      cart: cart,
      totalItems: totalItems
    });
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
  
    res.redirect('/cart');
  });

module.exports = router;