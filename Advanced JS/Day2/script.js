const API_URL = "https://fakestoreapi.com/products";

fetch(API_URL)
    .then((res) => res.json())
    .then((products) => {
    const grid = document.getElementById("grid");
    grid.innerHTML = "";

    products.forEach((p) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
        <img src="${p.image}" alt="${p.title}">
        <div class="body">
            <div class="desc">${p.title}</div>
            <div class="price">$${p.price}</div>
        </div>
        <div class="actions">
            <button class="btn-details" onclick="alert('Product details ' + ${p.id})">Details</button>
            <button class="btn-edit" onclick="alert('Edit product ' + ${p.id})">Edit</button>
        </div>
    `;
    grid.appendChild(card);
    });
})
.catch((err) => console.error("Failed to load products:", err));
