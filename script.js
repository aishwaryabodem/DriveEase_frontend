window.onload = function () {
  var carsList = document.getElementById("carsList");

  // Simple static data for demo (no backend needed)
  var cars = [
    { name: "Maruti Swift", price: 1500, image: "https://via.placeholder.com/200x120?text=Swift" },
    { name: "Hyundai i20", price: 1800, image: "https://via.placeholder.com/200x120?text=i20" },
    { name: "Tata Nexon", price: 2500, image: "https://via.placeholder.com/200x120?text=Nexon" },
    { name: "Toyota Innova", price: 3000, image: "https://via.placeholder.com/200x120?text=Innova" },
    { name: "Honda City", price: 2800, image: "https://via.placeholder.com/200x120?text=City" }
  ];

  carsList.innerHTML = "";
  cars.forEach(function (car) {
    var card = document.createElement("div");
    card.className = "car";
    card.style.border = "1px solid #ccc";
    card.style.margin = "10px";
    card.style.padding = "10px";
    card.style.width = "220px";
    card.style.display = "inline-block";
    card.style.textAlign = "center";
    card.innerHTML = `
      <img src="${car.image}" width="200"><br>
      <b>${car.name}</b><br>
      Price: ₹${car.price}/day<br><br>
      <button onclick="alert('Booking ${car.name}!')">Book Now</button>
    `;
    carsList.appendChild(card);
  });
};
