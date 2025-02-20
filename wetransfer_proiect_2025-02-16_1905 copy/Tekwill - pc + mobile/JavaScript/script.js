
const menuItems = [
  {
    category: "Băuturi",
    items: [
      { name: "Latte", description: "Cafea aromată combinată cu lapte aburit. (300ml)", price: "35 MDL", image: "../images/lattee.jpg" },
      { name: "Ciocolată caldă", description: "Băutură fierbinte și dulce, perfectă pentru a-ți încălzi inima. (300ml)", price: "30 MDL", image: "../images/hot chocolatee.jpg" },
      { name: "Cappuccino", description: "Cafea delicioasă amestecată cu lapte spumos.", price: "30 MDL", image: "../images/cappuccino.jpg" },
      { name: "Matcha Latte", description: "Matcha autentică, care îți va îmbogăți gustul pentru băuturi. (180ml)", price: "50 MDL", image: "../images/matcha latte.jpg" },
      { name: "Espresso", description: "Aroma bogată și intensă a cafelei noastre. (30ml)", price: "25 MDL", image: "../images/espresso.jpg" },
      { name: "Americano", description: "O aromă mai delicată decât espresso, potrivită pentru oricine. (120ml)", price: "25 MDL", image: "../images/americano.jpg" },
      { name: "Ceai Asortiment", description: "Un sortiment de ceaiuri parfumate, pentru un moment de relaxare. (250ml)", price: "20 MDL", image: "../images/tea.jpg" },
      { name: "Limonadă", description: "O limonadă proaspăt preparată, pentru o senzație revigorantă. (450ml)", price: "40 MDL", image: "../images/lemonade.jpg" }
    ]
  },
  {
    category: "Deserturi",
    items: [
      { name: "Brownies", description: "Brownie dulci, cu un gust intens de ciocolată.", price: "45 MDL", image: "../images/cornuri de brad.jpg" },
      { name: "Croissant", description: "Croissant crocant și untos, perfect pentru micul dejun.", price: "25 MDL", image: "../images/croissant.jpg" },
      { name: "Macarons", description: "Macarons franțuzești delicate, în arome variate.", price: "30 MDL", image: "../images/macarons.jpg" },
      { name: "Cheesecake", description: "Cheesecake cremos și fin, cu blat crocant de biscuiți.", price: "50 MDL", image: "../images/ciskek.jpg" },
      { name: "Biscuit", description: "Biscuit crocant cu bucăți de ciocolată topită.", price: "35 MDL", image: "../images/cookie.jpg" },
      { name: "Tiramisu", description: "Desert italian clasic cu mascarpone, cafea și cacao.", price: "45 MDL", image: "../images/tiramisu.jpg" },
      { name: "Gogoașă", description: "Pufos, aromat și acoperit cu glazură delicioasă.", price: "20 MDL", image: "../images/donut.jpg" },
      { name: "Muffin", description: "Muffin proaspăt din ciocolată, un desert clasic.", price: "25 MDL", image: "../images/muffin.jpg" }
    ]
  }
];

const menuSection = document.querySelector(".menu-section");

menuItems.forEach(category => {
  const categoryTitle = document.createElement("h2");
  categoryTitle.textContent = `- ${category.category} -`;
  categoryTitle.classList.add("category-title");
  menuSection.appendChild(categoryTitle);

  const menuGrid = document.createElement("div");
  menuGrid.classList.add("menu-grid");

  category.items.forEach(item => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    menuItem.innerHTML = `
      <div class="menu-item-image-wrapper">
        <img src="${item.image}" alt="${item.name}" class="menu-item-image">
      </div>
      <div class="menu-item-details">
        <h3 class="menu-item-title">${item.name}</h3>
        <p class="menu-item-description">${item.description}</p>
        <span class="menu-price">${item.price}</span>
      </div>
    `;

    menuGrid.appendChild(menuItem);
  });

  menuSection.appendChild(menuGrid);
});