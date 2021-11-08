const cart = JSON.parse(localStorage.getItem('cart')) || []

const itemNumber = document.getElementById("itemNumber")
itemNumber.innerHTML = "Item Number: " + cart.length;

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

//view item
function viewItem() {
  let arr = [];
  for (let i = 0; i < localStorage.length; i++) {
    let obj = {
      item: localStorage.getItem(localStorage.key(i))
    }
    arr.push(obj);
  }
  document.querySelector(".itemContainer").innerHTML = JSON.stringify(arr);
};

//remove item
function removeItem() {
  localStorage.clear();
  document.querySelector(".itemContainer").innerHTML = null;
  window.location.reload()
}