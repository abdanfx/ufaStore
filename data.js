"use strict";

// Data for UMKM Basic Necessities Store
const store = {
    name: "Selamat Datang di Toko Usaha Fantastis",
    description: "Belanja Kebutuhan Pokok Murah & Berkualitas",
    whatsapp: "+6281315452107"
}

console.log("Store Data : ", store);

// Product list
const products = [
  {
    id: 1,
    name: "Cabai Merah",
    price: 8000,
    unit: "per 1/4",
    stock: 10,
    description: "Cabai merah segar",
    image: "images/cabairawitpanjang.jpg"
  },
  {
    id: 2,
    name: "Bawang Merah",
    price: 9000,
    unit: "per 1/4",
    stock: 8,
    description: "Bawang merah berkualitas",
    image: "images/bawangmerah.jpg"
  },
  {
    id: 3,
    name: "Bawang Putih",
    price: 9000,
    unit: "per 1/4",
    stock: 15,
    description: "Bawang putih",
    image: "images/bawangputih.jpg"
  },
  {
    id: 4,
    name: "Minyak Goreng",
    price: 15700,
    unit: "liter",
    stock: 20,
    description: "Minyak goreng kemasan",
    image: "images/minyakgoreng.jpg"
  },
  {
    id: 5,
    name: "Kentang Dieng Lokal",
    price: 8000,
    unit: "per 1/2kg",
    stock: 20,
    description: "Kentang Dieng Lokal",
    image: "images/kentangdienglokal.jpg"
  },
  {
    id: 6,
    name: "Jengkol",
    price: 15000,
    unit: "per kg",
    stock: 20,
    description: "Jengkol",
    image: "images/jengkol.jpg"
  }
];

console.log("Products:", products);