const cars = [
  { name: "Maruti Suzuki Swift", price: 1500, image: "swift.jpg" },
  { name: "Tata Nexon", price: 2000, image: "nexon.jpg" },
  { name: "Hyundai Creta", price: 2500, image: "creta.jpg" },
  { name: "Mahindra XUV700", price: 3000, image: "xuv700.jpg" },
  { name: "Kia Seltos", price: 2700, image: "seltos.jpg" },
  { name: "Maruti Baleno", price: 2200, image: "baleno.jpg" },
  { name: "Toyota Innova Crysta", price: 3200, image: "innova.jpg" },
  { name: "MG Hector", price: 2800, image: "hector.jpg" }
];

const carsList = document.getElementById("carsList");
if (carsList) {
  cars.forEach(car => {
    const div = document.createElement("div");
    div.className = "car-card";
    div.innerHTML = `
      <img src="${car.image}" alt="${car.name}">
      <h3>${car.name}</h3>
      <p>Price: ₹${car.price}/day</p>
    `;
    carsList.appendChild(div);
  });
}

const carSelect = document.getElementById("carSelect");
if (carSelect) {
  carSelect.innerHTML = "";
  cars.forEach(car => {
    const option = document.createElement("option");
    option.value = car.name;
    option.textContent = car.name;
    carSelect.appendChild(option);
  });
}
