"use strict";

// ===== HAMBURGER MENU =====
// This function handles the responsive mobile menu
function setupHamburgerMenu() {
    // Get the hamburger button and navigation menu
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
    
    // When user clicks the hamburger button
    hamburger.addEventListener("click", function() {
        // Toggle the 'active' class on hamburger (changes icon to X)
        hamburger.classList.toggle("active");
        
        // Toggle the 'active' class on menu (shows/hides the menu)
        navMenu.classList.toggle("active");
    });
    
    // Close menu when user clicks a menu item
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            // Remove 'active' class from hamburger and menu
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });
}

// ===== DISPLAY STORE INFORMATION =====
function displayStoreInfo() {
    document.getElementById("storeName").textContent = store.name;
    document.getElementById("storeDescription").textContent = store.description;
    document.getElementById("storeWhatsapp").innerHTML = 
        `WhatsApp: <a href="https://wa.me/6281315452107" target="_blank">${store.whatsapp}</a>`;
}

// ===== SETUP WHATSAPP BUTTON =====
// This function makes the WhatsApp button clickable
function setupWhatsappButton() {
    // Get the WhatsApp button element
    const whatsappBtn = document.getElementById("whatsappBtn");
    
    // When user clicks the button, open WhatsApp with a message
    whatsappBtn.addEventListener("click", function() {
        // Open WhatsApp with a pre-filled message
        window.open(`https://wa.me/6281315452107?text=Halo, saya ingin pesan barang`, "_blank");
    });
}

// ===== DISPLAY ALL PRODUCTS =====
function displayProducts() {
    const productList = document.getElementById("productList");
    
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        
        productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-img">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-price">Rp${product.price.toLocaleString('id-ID')}</div>
        <p>Unit: ${product.unit}</p>
        <p class="product-stock">Stock: ${product.stock}</p>
        <a href="https://wa.me/6281315452107?text=Saya ingin pesan ${product.name} - ${product.unit}" target="_blank" class="whatsapp-order-btn">
            💬 Order via WhatsApp
        </a>
    `;
        
        productList.appendChild(productCard);
    });
}

// ===== INITIALIZE THE PAGE =====
// ===== INITIALIZE THE PAGE =====
function init() {
    displayStoreInfo();
    setupHamburgerMenu();  // Add this line
    setupWhatsappButton();
    displayProducts();
}

// Run when page loads
document.addEventListener("DOMContentLoaded", init);