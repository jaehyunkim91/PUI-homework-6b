const cart = JSON.parse(localStorage.getItem('cart')) || []

const cartNumElem = document.getElementById('cartNumber')

if (cartNumElem) {
  cartNumElem.innerHTML = cart.length
}
