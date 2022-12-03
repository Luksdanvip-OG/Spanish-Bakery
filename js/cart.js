let cartIcon = document.getElementById('cart-icon');
let cart_view = document.getElementById("cart");
let cart_close = document.getElementById("close-button");


cartIcon.addEventListener("click", (e) => {
    toggleShow(cart_view);
});

cart_close.addEventListener("click", (e) => {
    toggleClose(cart_view);
})





function toggleShow(element) {
    console.log(element);
    element.style.display = 'flex';
}
function toggleClose(element) {
    console.log(element);
    element.style.display = 'none';
}