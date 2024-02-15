// // Stockage des catégories
// localStorage.setItem('categories', JSON.stringify(categories));

// // Stockage des produits
// localStorage.setItem('produits', JSON.stringify(produits));

// // Stockage des commandes
// localStorage.setItem('commandes', JSON.stringify(commandes));

// // Stockage des utilisateurs
// localStorage.setItem('utilisateurs', JSON.stringify(utilisateurs));


// // Récupération des catégories
// const storedCategories = JSON.parse(localStorage.getItem('categories'));

// // Récupération des produits
// const storedProduits = JSON.parse(localStorage.getItem('produits'));

// // Récupération des commandes
// const storedCommandes = JSON.parse(localStorage.getItem('commandes'));

// // Récupération des utilisateurs
// const storedUtilisateurs = JSON.parse(localStorage.getItem('utilisateurs'));
document.addEventListener('DOMContentLoaded', function() {
  // Récupérer les éléments DOM
  const welcomeMessage = document.getElementById('welcome-message');
  const iconsSection = document.getElementById('icons');
  const searchInput = document.getElementById('search-input');
  const productList = document.getElementById('product-list');
  
  // Vérifier si l'utilisateur est connecté
  if (isUserLoggedIn()) {
      // Si connecté, afficher le message de bienvenue et les icônes
      const username = localStorage.getItem('username');
      welcomeMessage.innerHTML = `<p>Bienvenue ${username}</p>`;
      iconsSection.innerHTML = `
          <a href="panier.html"><i class="fa-solid fa-cart-shopping"></i></a>
          <div class="user-icon-dropdown">
              <span>Bienvenue ${username}</span>
              <ul>
                  <li><a href="#">Profil</a></li>
                  <li><a href="#" onclick="logout()">Déconnexion</a></li>
              </ul>
          </div>
      `;
  } else {
      // Si déconnecté, afficher un message différent ou masquer la section
      welcomeMessage.innerHTML = '<p>Connectez-vous pour découvrir notre collection.</p>';
      iconsSection.style.display = 'none';
  }

  // Afficher les produits dans la liste
  displayProducts();

  // Fonction pour afficher les produits dans la liste
  function displayProducts() {
      // Récupérer les produits depuis le localStorage
      const products = JSON.parse(localStorage.getItem('products')) || [];
      
      // Générer le contenu de la liste des produits
      let productListHTML = '';
      products.forEach(product => {
          productListHTML += `<li>${product.name} - ${product.price}€</li>`;
      });

      // Afficher la liste des produits
      productList.innerHTML = productListHTML;
  }

  // Fonction pour rechercher un produit
  function searchProduct() {
      const searchTerm = searchInput.value.toLowerCase();
      const products = JSON.parse(localStorage.getItem('products')) || [];
      const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
      // Afficher les produits filtrés
      let productListHTML = '';
      filteredProducts.forEach(product => {
          productListHTML += `<li>${product.name} - ${product.price}€</li>`;
      });
      productList.innerHTML = productListHTML;
  }
});


// Exemple tableau des catégories de produits
const categories = [
  { id: 1, name: 'Mobilier d\'intérieur' },
  { id: 2, name: 'Luminaires' },
  { id: 3, name: 'Tapis' },
  { id: 4, name: 'Objets de décorations' }
];

// Stockage des catégories dans le localStorage
localStorage.setItem('categories', JSON.stringify(categories));




var produits = [
    {
      id: 1,
      name: "Table en bois",
      description: "Table en bois massif avec finition élégante.",
      imageUrl: "pic/mobilier-1.jpg",
      price: 199.99,
      category: 'Mobilier',
      quantity: 500,
    },
    {
      id: 2,
      name: "etagere",
      description: "petite etagere style industriel.",
      imageUrl: "pic/mobilier-2.jpg",
      price: 89.99,
      category: 'Mobilier',
      quantity: 1000,
    },
    {
      id: 3,
      name: "canapé cuir marron",
      description: "Canape en cuir marron trois places.",
      imageUrl: "pic/mobilier-3.jpg",
      price: 1299.99,
      category: 'Mobilier',
      quantity: 100,
    },
    {
      id: 4,
      name: "canapé en tissu vert",
      description: "Canapeen tissu vert 3 places.",
      imageUrl: "pic/mobilier-4.jpg",
      price: 999.99,
      category: 'Mobilier',
      quantity: 100,
    },
    {
      id: 5,
      name: "ensemble table et chaise ",
      description: "ensemble table et chaise styles scandinave.",
      imageUrl: "pic/mobilier-5.jpg",
      price: 499.49,
      category: 'Mobilier',
      quantity: 500,
    },
    {
      id: 6,
      name: "suspension noire industriel",
      description: "Lampe avec un design moderne ",
      imageUrl: "./pic/luminaire-1.jpg",
      price: 79.79,
      category: 'Luminaire',
      quantity: 500,
    },
    {
      id: 7,
      name: "suspension blanche ",
      description: "Lampe avec un design moderne ",
      imageUrl: "./pic/luminaire-2.jpg",
      price: 89.99,
      category: 'Luminaire',
      quantity: 500,
    },
    {
      id: 8,
      name: "suspencion style bois ",
      description: "Lampe avec un design modern.",
      imageUrl: "./pic/luminaire-3.jpg",
      price: 51.99,
      category: 'Luminaire',
      quantity: 500,
    },
    {
      id: 9,
      name: "suspencion noir",
      description: "Lampe avec un design moderne.",
      imageUrl: "./pic/luminaire-4.jpg",
      price: 121.49,
      category: 'Luminaire',
      quantity: 500,
    },
    {
      id: 10,
      name: "Applique murale",
      description: "Lampe avec un design moderne.",
      imageUrl: "./pic/luminaire-5.jpg",
      price: 39.99,
      category: 'Luminaire',
      quantity: 1000,
    },
    {
      id: 11,
      name: "vase style bois",
      description: "deux magnifique vase style bois",
      imageUrl: "./pic/deco-1.jpg",
      price: 19.99,
      category: 'Décoration',
      quantity: 550,
    },
    {
      id: 12,
      name: "vase design",
      description: "Magnifique vase vert pomme .",
      imageUrl: "./pic/deco-2.jpg",
      price: 49.99,
      category: 'Décoration',
      quantity: 600,
    },
    {
      id: 13,
      name: "3 poterie decorative",
      description: "poterie decorative en terre cuite.",
      imageUrl: "./pic/deco-3.jpg",
      price: 119.49,
      category: 'Décoration',
      quantity: 100,
    },
    {
      id: 14,
      name: "vase en terre",
      description: "vase en terre cuir style grec.",
      imageUrl: "./pic/deco-4.jpg",
      price: 149.49,
      category: 'Décoration',
      quantity: 1000,
    },
    {
      id: 15,
      name: "vase bleu",
      description: "vase en verre souffle bleu.",
      imageUrl: "./pic/deco-5.jpg",
      price: 189.99,
      category: 'Décoration',
      quantity: 1000,
    },
    {
      id: 16,
      name: "peau de bete",
      description: "tapis en fausse peau de bete.",
      imageUrl: "./pic/tapis-1.jpg",
      price: 130.00,
      category: 'Tapis',
      quantity: 1000,
    },
    {
      id: 17,
      name: "Tapis style marocain",
      description: "tapis style marocain motif lineaire.",
      imageUrl: "./pic/tapis-2.jpg",
      price: 121.49,
      category: 'Tapis',
      quantity: 1000,
    },
    {
      id: 18,
      name: "tapis orientale",
      description: "tapis style orientale .",
      imageUrl: "./pic/tapis-3.jpg",
      price: 121.49,
      category: 'Tapis',
      quantity: 1000,
    },
    {
      id: 19,
      name: "tapis elephant",
      description: "Joli petit tapis style crochet en forme de tete d'elephant.",
      imageUrl: "./pic/tapis-4.jpg",
      price: 99.99,
      category: 'Tapis',
      quantity: 1000,
    },
    {
      id: 20,
      name: "tapis Noir",
      description: "tapis moltonne noir .",
      imageUrl: "./pic/tapis-5.jpg",
      price: 59.99,
      category: 'Tapis',
      quantity: 1000,
    },
    ];
  


// Récupération des produits depuis le stockage local
const storedProducts = JSON.parse(localStorage.getItem('produits'));

// Fonction de recherche de produit
function searchProduct() {
    const searchInput = document.getElementById('search-input').value.trim().toLowerCase();

    // Si la barre de recherche est vide, afficher tous les produits
    if (searchInput === '') {
        displayProducts(storedProducts);
        return;
    }

    // Vérification si des produits sont récupérés
    if (!storedProducts) {
        console.error("Aucun produit trouvé dans le stockage local.");
        return;
    }

    // Filtrer les produits qui contiennent le terme de recherche dans leur nom ou leur description
    const filteredProducts = storedProducts.filter(product =>
        product.name.toLowerCase().includes(searchInput) ||
        product.description.toLowerCase().includes(searchInput)
    );

    // Afficher les produits filtrés
    displayProducts(filteredProducts);
}

// Lier la fonction searchProduct à l'événement "click" du bouton de recherche
document.getElementById('search-button').addEventListener('click', searchProduct);

// Lier la fonction searchProduct à l'événement "keypress" de la barre de recherche pour permettre la recherche en appuyant sur "Entrée"
document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchProduct();
    }
});

// Appel de la fonction pour afficher tous les produits lors du chargement de la page
window.addEventListener('load', function() {
    displayProducts(storedProducts);
});

// Fonction pour afficher les produits dans la liste
function displayProducts(products) {
    const productListElement = document.getElementById('product-list');

    // Vider la liste actuelle des produits
    productListElement.innerHTML = '';

    // Si aucun produit n'est trouvé
    if (!products || products.length === 0) {
        productListElement.innerHTML = '<li>Aucun produit trouvé.</li>';
        return;
    }

    // Pour chaque produit, créer un élément de liste et l'ajouter à la liste
    products.forEach(product => {
        const li = document.createElement('li');
        // Création de l'élément image
        const img = document.createElement('img');
        img.src = product.imageUrl;
        img.alt = product.name;
        img.classList.add('product-image');
        // Ajout de l'image à l'élément de liste
        li.appendChild(img);
        // Création des éléments de texte
        const name = document.createElement('h3');
        name.textContent = product.name;
        const description = document.createElement('p');
        description.textContent = product.description;
        const price = document.createElement('p');
        price.textContent = 'Prix: ' + product.price + '€';
        const quantity = document.createElement('p');
        quantity.textContent = 'Quantité disponible: ' + product.quantity;
        // Ajout des éléments de texte à l'élément de liste
        li.appendChild(name);
        li.appendChild(description);
        li.appendChild(price);
        li.appendChild(quantity);
        // Ajout de l'élément de liste à la liste
        productListElement.appendChild(li);
    });
}

// pour que les article n'affiche le prix que si l'utilisateur est connecter 
// 1. Vérifier l'état de connexion de l'utilisateur
let userLoggedIn = false; // Par défaut, l'utilisateur n'est pas connecté

// 2. Modifier l'affichage des prix en fonction de l'état de connexion
function displayProducts(products) {
    const productListElement = document.getElementById('product-list');

    // Vider la liste actuelle des produits
    productListElement.innerHTML = '';

    // Si aucun produit n'est trouvé
    if (!products || products.length === 0) {
        productListElement.innerHTML = '<li>Aucun produit trouvé.</li>';
        return;
    }

    // Pour chaque produit, créer un élément de liste et l'ajouter à la liste
    products.forEach(product => {
        const li = document.createElement('li');
        // Création de l'élément image
        const img = document.createElement('img');
        img.src = product.imageUrl;
        img.alt = product.name;
        img.classList.add('product-image');
        // Ajout de l'image à l'élément de liste
        li.appendChild(img);
        // Ajout du nom du produit à l'élément de liste
        const name = document.createElement('h3');
        name.textContent = product.name;
        li.appendChild(name);
        // Si l'utilisateur est connecté, afficher le prix
        if (userLoggedIn) {
            const price = document.createElement('p');
            price.textContent = 'Prix: ' + product.price + '€';
            li.appendChild(price);
        }
        // Ajout de l'élément de liste à la liste
        productListElement.appendChild(li);
    });
}

// 3. Ajouter un bouton de connexion/inscription
const loginButton = document.getElementById('login-button');
loginButton.addEventListener('click', function() {
    // Code pour gérer la connexion de l'utilisateur
    // Par exemple, afficher un formulaire de connexion ou rediriger vers une page de connexion
});




// Fonction pour inscrire un nouvel utilisateur
function registerUser(username, password) {
  // Vérifier si l'utilisateur existe déjà
  if (localStorage.getItem(username)) {
      console.log('Cet utilisateur existe déjà.');
      return false; // L'inscription échoue
  } else {
      // Stocker les informations de l'utilisateur dans le localStorage
      localStorage.setItem(username, password);
      console.log('Inscription réussie.');
      return true; // L'inscription réussit
  }
}

// Fonction pour connecter un utilisateur
function loginUser(username, password) {
  // Vérifier si l'utilisateur existe et si le mot de passe correspond
  const storedPassword = localStorage.getItem(username);
  if (storedPassword && storedPassword === password) {
      console.log('Connexion réussie.');
      return true; // La connexion réussit
  } else {
      console.log('Nom d\'utilisateur ou mot de passe incorrect.');
      return false; // La connexion échoue
  }
}

// Exemple d'utilisation
const username = 'john_doe';
const password = '12345';

// Inscription d'un nouvel utilisateur
registerUser(username, password);

// Tentative de connexion avec les informations d'inscription
loginUser(username, password);


          //ADMIN

          //
// Pour relier votre page de connexion à la gestion des utilisateurs dans le stockage local, vous pouvez suivre ces étapes :

// Créez un formulaire de connexion dans votre page HTML avec des champs pour le nom d'utilisateur (ou email) et le mot de passe.
// Ajoutez un bouton de soumission pour envoyer les informations du formulaire.
// Utilisez JavaScript pour récupérer les valeurs saisies dans le formulaire et les comparer aux informations des utilisateurs stockées dans le stockage local.
// Si les informations de connexion sont valides, redirigez l'utilisateur vers une page d'accueil ou une autre page sécurisée. Sinon, affichez un message d'erreur.

// Fonction pour enregistrer un nouvel utilisateur
function registerUser(username, email, password) {
  // Récupérer les utilisateurs déjà enregistrés ou initialiser un tableau vide s'il n'y en a pas encore
  let users = JSON.parse(localStorage.getItem('users')) || [];

  // Vérifier si l'utilisateur existe déjà
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
      console.error("Cet e-mail est déjà utilisé.");
      return false; // Ne pas enregistrer l'utilisateur s'il existe déjà
  }

  // Créer un nouvel objet utilisateur
  const newUser = {
      username: username,
      email: email,
      password: password
  };

  // Ajouter le nouvel utilisateur à la liste
  users.push(newUser);

  // Enregistrer la liste mise à jour dans le stockage local
  localStorage.setItem('users', JSON.stringify(users));
  
  return true; // Retourner true pour indiquer que l'inscription a réussi
}

// Exemple d'utilisation de la fonction registerUser
const registrationSuccess = registerUser('john_doe', 'john@example.com', 'password123');
if (registrationSuccess) {
  console.log("Inscription réussie !");
} else {
  console.log("L'inscription a échoué. Veuillez réessayer avec une adresse e-mail différente.");
}
document.addEventListener('DOMContentLoaded', function() {
  // Fonction pour afficher les utilisateurs inscrits
  function displayUsers() {
      const userListElement = document.getElementById('user-list');
      userListElement.innerHTML = ''; // Clear previous list

      // Get users from localStorage
      const users = JSON.parse(localStorage.getItem('utilisateurs'));

      if (!users) {
          userListElement.innerHTML = '<li>Aucun utilisateur inscrit.</li>';
          return;
      }

      users.forEach(user => {
          const li = document.createElement('li');
          li.textContent = `Nom: ${user.name}, Email: ${user.email}`;
          userListElement.appendChild(li);
      });
  }

  // Afficher les utilisateurs lors du chargement initial
  displayUsers();

  // Ajouter un nouvel utilisateur
  const addProductForm = document.getElementById('add-product-form');
  addProductForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const productName = document.getElementById('product-name').value;
      const productDescription = document.getElementById('product-description').value;
      const productPrice = parseFloat(document.getElementById('product-price').value);

      // Validation des données
      if (!productName || !productDescription || isNaN(productPrice)) {
          alert('Veuillez remplir tous les champs correctement.');
          return;
      }

      // Obtenir les produits actuels depuis le localStorage
      let products = JSON.parse(localStorage.getItem('produits')) || [];

      // Générer un nouvel ID pour le produit
      const productId = products.length > 0 ? products[products.length - 1].id + 1 : 1;

      // Créer le nouvel objet produit
      const newProduct = {
          id: productId,
          name: productName,
          description: productDescription,
          price: productPrice
          // Ajoutez d'autres propriétés si nécessaire
      };

      // Ajouter le nouveau produit à la liste
      products.push(newProduct);

      // Mettre à jour le localStorage avec la nouvelle liste de produits
      localStorage.setItem('produits', JSON.stringify(products));

      // Effacer les champs du formulaire
      addProductForm.reset();

      // Afficher un message de succès
      alert('Le produit a été ajouté avec succès.');

      // Mettre à jour l'affichage des produits
      displayProducts();
  });
});