// permet de tout lier 
function saveBasket(basket){
    localStorage.setItem("basket",JSON.stringify(basket));
   
}

function getbasket(){
   let basket = localStorage.getItem("basket");
   if (basket == null) {
        return[];
   }else{
    return JSON.parse(basket);
   }
}

function addBasket(product){
    let basket = getBasket();
    let foundProduct = basket.find(p => p.id == product.id);
    if(foundProduct != undefined){
        foundProduct.quantity++;
    }else {
        product.quantity = 1;
        basket.push(product);
    }
    basket.push(product);
    saveBasket(basket);
}

function removeFromBasket(product){
    let basket = getBasket();
    basket = basket.filter(p => p.id != product.id)
    saveBasket(basket);
}

function changeQuantity(product,quantity){
    let basket = getBasket();
    let foundProduct = basket.find(p => p.id == product.id);
    if(foundProduct != undefined){
foundProduct.quantity += quantity;
if(foundProduct.quantity <= 0){
    removeFromBasket(foundproduct)
}else{
    saveBasket(basket);
} }   
}
function getNumberProduct(){
    let basket = getBasket();
    let number = 0;
    for (let product of basket) {
        number += product.quantity;
    }
    return number;
}

function getTotalPrice(){
    let basket = getBasket();
    let total = 0;
    for(let product of basket) {
        total += product.quantity * product.price;
    }
    return total;
}
let cartItems = [
    { id: 1, name: "Produit 1", price: 10, quantity: 10 }, // Modification de la quantité minimale à 10
    { id: 2, name: "Produit 2", price: 20, quantity: 10 }, // Modification de la quantité minimale à 10
    { id: 3, name: "Produit 3", price: 30, quantity: 10 } // Modification de la quantité minimale à 10
];

// Fonction pour afficher les éléments du panier
function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    const subtotalHTElement = document.getElementById('subtotal-ht');
    const subtotalTTCElement = document.getElementById('subtotal-ttc');
    let subtotalHT = 0;
    let subtotalTTC = 0;

    cartContainer.innerHTML = '';
    cartItems.forEach(item => {
        const subtotal = item.price * item.quantity;
        const subtotalTTCItem = subtotal * 1.2; // TTC avec un taux de TVA de 20%
        subtotalHT += subtotal;
        subtotalTTC += subtotalTTCItem;

        cartContainer.innerHTML += `
            <div class="cart-item">
                <div>${item.name} - €${item.price.toFixed(2)}</div>
                <div>
                    <input type="number" value="${item.quantity}" min="10" class="quantity-input" data-id="${item.id}">
                    <button class="remove-btn" data-id="${item.id}">Retirer</button>
                </div>
                <div>€${subtotal.toFixed(2)}</div>
                <div>€${subtotalTTCItem.toFixed(2)}</div>
            </div>`;
    });

    subtotalHTElement.textContent = `Sous-total HT: €${subtotalHT.toFixed(2)}`;
    subtotalTTCElement.textContent = `Sous-total TTC: €${subtotalTTC.toFixed(2)}`;

    const totalHT = subtotalHT;
    const totalTTC = subtotalTTC;
    document.getElementById('total').textContent = `Total général HT: €${totalHT.toFixed(2)}`;
    document.getElementById('total-ttc').textContent = `Total général TTC: €${totalTTC.toFixed(2)}`;
}

// Affichage initial du panier
displayCart();

// Gestion de la modification de la quantité
document.querySelectorAll('.quantity-input').forEach(input => {
    input.addEventListener('change', () => {
        const id = parseInt(input.getAttribute('data-id'));
        const newQuantity = parseInt(input.value);
        const itemIndex = cartItems.findIndex(item => item.id === id);
        if (itemIndex !== -1 && newQuantity >= 10) { // Vérification de la quantité minimale
            cartItems[itemIndex].quantity = newQuantity;
            displayCart();
        } else {
            input.value = cartItems[itemIndex].quantity;
        }
    });
});

// Gestion du clic sur le bouton "Retirer"
document.querySelectorAll('.remove-btn').forEach(button => {
    button.addEventListener('click', () => {
        const id = parseInt(button.getAttribute('data-id'));
        const itemIndex = cartItems.findIndex(item => item.id === id);
        if (itemIndex !== -1) {
            cartItems.splice(itemIndex, 1); // Retire l'élément du tableau cartItems
            displayCart(); // Met à jour l'affichage du panier après la suppression
        }
    });
});

// Gestion du clic sur le bouton "Payer"
document.getElementById('checkout-btn').addEventListener('click', () => {
    // Affiche une popup avec le message
    alert('Votre demande a bien été prise en compte. Merci !');
});
