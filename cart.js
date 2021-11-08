const cart = JSON.parse(localStorage.getItem('cart')) || []

//display # of items in cart using array length
const itemNumber = document.getElementById("itemNumber")
itemNumber.innerHTML = "Item Number: " + cart.length;

//add item to array using for loop in the unordered list on html; also embed remove button for each list added 
const itemList = document.getElementById("itemList")
for (let i = 0; i < cart.length; i += 1) {
  const item = cart[i]
  const elem = document.createElement('li')
  elem.innerHTML = "Color: " + item.color + " " + "Size: " + item.size
  const btn = document.createElement('button')
  btn.innerText = 'Remove'
  btn.addEventListener('click', function () {
    const idx = cart.findIndex(function (cartItem) {
      console.log(cartItem.id, item.id)
      return cartItem.id === item.id
    })
    cart.splice(idx, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    window.location.reload()
  })
  elem.appendChild(btn)
  itemList.appendChild(elem)
}
