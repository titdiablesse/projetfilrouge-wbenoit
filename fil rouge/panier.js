// Données d'exemple pour le panier
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

$(document).ready(function() {
  // Redirection vers la page commande.html lors du clic sur le bouton "Payer"
  $('#checkout-btn').click(function() {
      window.location.href = 'confirmecdm.html'; // Redirection vers la page commande.html
  });
});

  // Fonction pour calculer le prix total de tous les produits dans le panier
  function calculateTotalPrice() {
    let totalPrice = 0;
    const rows = document.querySelectorAll('#cart-body tr');
    rows.forEach(row => {
        const price = parseFloat(row.querySelector('.unit-price').textContent);
        const quantity = parseInt(row.querySelector('.quantity').value);
        const total = price * quantity;
        row.querySelector('.total-price').textContent = total.toFixed(2);
        totalPrice += total;
    });
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

// Fonction pour ajouter une ligne au panier
function addToCart(product) {
    const tbody = document.getElementById('cart-body');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${product.name}</td>
        <td class="unit-price">${product.price}</td>
        <td><input type="number" class="quantity" value="10" min="10" onchange="calculateTotalPrice()"></td>
        <td class="total-price">${(product.price * 10).toFixed(2)}</td>
    `;
    tbody.appendChild(row);
    calculateTotalPrice();
}

// Appel de la fonction pour ajouter les produits au panier
window.addEventListener('load', function() {
    // Supposons que "storedProducts" contient les produits ajoutés au panier
    const storedProducts = JSON.parse(localStorage.getItem('produits'));

    // Ajouter chaque produit au panier
    storedProducts.forEach(product => {
        addToCart(product);
    });
});