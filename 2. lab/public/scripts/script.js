function addToCart(productName) {
    const cartCount = document.getElementById("cart-items");
    const itemCount = document.getElementById(productName);
    const currentCount = parseInt(cartCount.textContent);
    console.log(currentCount);
    console.log(itemCount.textContent);
    itemCount.textContent = currentCount + 1;
    cartCount.textContent = currentCount + 1;
    fetch('/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productName: productName })
      }).then(response => {
          if (response.ok) {
          } else {
            console.log('Error updating cart');
          }
        })
        .catch(error => {
          console.log('Error updating cart:', error);
        });
  }

  function removeFromCart(productName) {
    const cartCount = document.getElementById("cart-items");
    const itemCount = document.getElementById("productName");
    const currentCount = parseInt(cartCount.textContent);
    itemCount.textContent = currentCount + 1;
    cartCount.textContent = currentCount - 1;
    fetch('/remove/' + productName, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ productName: productName })
    }).then(response => {
        if (response.ok) {
        } else {
          console.log('Error updating cart');
        }
      })
      .catch(error => {
        console.log('Error updating cart:', error);
      });
  }

