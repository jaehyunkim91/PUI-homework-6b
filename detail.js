//removing the border color(blue) of initial color option when a new color option is clicked
function removeBorder() {
  if (document.querySelector("label")) {
    document.querySelector("label").style.border = "none"
    document.querySelector("#color1").style.border = "none"
    document.querySelector("#color2").style.border = "none"
    document.querySelector("#color3").style.border = "none"
    document.querySelector("#color4").style.border = "none"
    document.querySelector("#color5").style.border = "none"
    selectColor(undefined)
  }
}
//functions to add border color and changes the image when new coloe option is selected
function toStrawberry() {
  if ((document.querySelector("#color1"))) {
    removeBorder()
    document.querySelector("#color1").style.border = "2px solid blue"
    document.querySelector("#firstImg").src = "image/colorChangeSmall.png"
    document.querySelector("#secondImg").src = "image/colorChangeSmall2.png"
    document.querySelector("#thirdImg").src = "image/colorChangeSmall3.png"
    document.querySelector("#fourthImg").src = "image/colorChangeBig.png"
    selectColor('strawberry')
  }
}
function toBlackberry() {
  if (document.querySelector("#color2")) {
    removeBorder()
    document.querySelector("#color2").style.border = "2px solid blue"
    document.querySelector("#firstImg").src = "image/colorChangeSmall.png"
    document.querySelector("#secondImg").src = "image/colorChangeSmall2.png"
    document.querySelector("#thirdImg").src = "image/colorChangeSmall3.png"
    document.querySelector("#fourthImg").src = "image/colorChangeBig.png"
    selectColor('blackberry')
  }
}
function toCrazyberry() {
  if (document.querySelector("#color3")) {
    removeBorder()
    document.querySelector("#color3").style.border = "2px solid blue"
    document.querySelector("#firstImg").src = "image/detailPageSmall1.png"
    document.querySelector("#secondImg").src = "image/detailPageSmall2.png"
    document.querySelector("#thirdImg").src = "image/colorChangeSmall3.png"
    document.querySelector("#fourthImg").src = "image/detailPageLarge.png"
    selectColor('crazyberry')
  }
}
function toFireOrange() {
  if (document.querySelector("#color4")) {
    removeBorder()
    document.querySelector("#color4").style.border = "2px solid blue"
    document.querySelector("#firstImg").src = "image/colorChangeSmall.png"
    document.querySelector("#secondImg").src = "image/colorChangeSmall2.png"
    document.querySelector("#thirdImg").src = "image/colorChangeSmall3.png"
    document.querySelector("#fourthImg").src = "image/detailPageLarge.png"
    selectColor('fireorange')
  }
}
function toSpaceGrey() {
  if (document.querySelector("#color5")) {
    removeBorder()
    document.querySelector("#color5").style.border = "2px solid blue"
    document.querySelector("#firstImg").src = "image/detailPageSmall1.png"
    document.querySelector("#secondImg").src = "image/detailPageSmall2.png"
    document.querySelector("#thirdImg").src = "image/colorChangeSmall3.png"
    document.querySelector("#fourthImg").src = "image/colorChangeBig.png"
    selectColor('spacegrey')
  }
}

//creating item object with id, color, and size
function Item(id, color, size) {
  this.id = id
  this.color = color
  this.size = size
}

// assigning random id to object instances in order to make remove function work
const currentItem = new Item(Math.random())

//assigning value of color to object instance's color attribute
function selectColor(color) {
  currentItem.color = color
}

//assigning value of size to object instance's size attribute
function selectSize(size) {
  currentItem.size = size
}


const sizeSelector = document.getElementById('size-selector');
sizeSelector.addEventListener('change', function(e) {
  const selected = e.target.value
  selectSize(selected)
});

//add to cart function (set to a blank array if empty)
function onClickAddToCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || []

  cart.push(currentItem)

  localStorage.setItem('cart', JSON.stringify(cart))

  cartNumElem.innerHTML = cart.length

  // this refreshes the page to generate new "currentItem"; it is only for testing purposes, since I want to simulate multiple products in the cart
  window.location.reload()
}
