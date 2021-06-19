const purchaseBtn = document.getElementById('purchase');
const addCartBtn = document.getElementsByClassName('add-cart');
const cart = document.querySelector('.cart');
const totalNum = document.getElementById('total-num');
let cartProduct = [];

for (let i = 0; i < addCartBtn.length; i++) {
    addCartBtn[i].addEventListener('click', (item) => {        
        addCart(item.path[0]);
    })
}

function addCart (itemBtn) {
    const itemName = itemBtn.parentElement.getElementsByTagName('p')[0].textContent;
    if (cartProduct.includes(itemName)) {
        alert('This product has been added to the cart!')
    }
    else {
        cartProduct.push(itemName);
        const itemPrice = itemBtn.parentElement.getElementsByTagName('i')[0].textContent;
        const itemImgSrc = itemBtn.parentElement.parentElement.getElementsByTagName('img')[0].getAttribute('src');
        const price = Number(itemPrice.slice(1,itemPrice.length));
        const cartItem = document.createElement('tr');
        cartItem.innerHTML = 
            `<td class="cart-product"><img src="${itemImgSrc}" alt="vase" /><span>${itemName}</span></td>
            <td><i>${itemPrice}</i></td>
            <td><input class="quantity" type="number" value="1" min= "1" max = "100" /></td>
            <td><i class="subtotal">${itemPrice}</i></td>
            <td>
                <button class="delete"><i class="fas fa-times"></i></button>
            </td>`;  
        cart.getElementsByTagName('tbody')[0].appendChild(cartItem);
        totalPrice();
        
        const deleteBtn = cartItem.querySelector('.delete');
        const quantity = cartItem.querySelector('.quantity');
        const subtotal = cartItem.querySelector('.subtotal');
        
        deleteBtn.addEventListener('click', () => {
            cartItem.remove();
            const index = cartProduct.indexOf(itemName);
            if (index > -1) {
                cartProduct.splice(index, 1);
            }
            totalPrice();
        })
        
        quantity.addEventListener('input', () => {
            subtotal.innerText = `$${(quantity.value * price).toFixed(2)}`;
            totalPrice();
        })
    }   
}

function totalPrice() {
    const allSubtotal = document.querySelectorAll('.subtotal');
    let total = 0;
    for ( let i = 0; i < allSubtotal.length; i++) {
        total += Number(allSubtotal[i].innerText.slice(1,allSubtotal[i].length));
    }
    totalNum.innerText = `$${total.toFixed(2)}`;
}

purchaseBtn.addEventListener('click', () => {
    alert('Thank you for your purchase. Have a nice day!');
    cart.getElementsByTagName('tbody')[0].innerHTML = null;
    totalPrice();
})