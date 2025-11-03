// If backend not available, use this fallback data
var cars = [
  { name: "Maruti Suzuki Swift", price: 1500, image: "swift.jpg" },
  { name: "Tata Nexon", price: 2000, image: "nexon.jpg" },
  { name: "Hyundai Creta", price: 2500, image: "creta.jpg" },
  { name: "Mahindra XUV700", price: 3000, image: "xuv700.jpg" },
  { name: "Kia Seltos", price: 2700, image: "seltos.jpg" },
 { name: "Maruti Baleno", price: 2200, image: "baleno_new.jpg" },
  { name: "Toyota Innova Crysta", price: 3200, image: "innova.jpg" },
  { name: "MG Hector", price: 2800, image: "hector.jpg" }
];

window.onload = function () {
  var carsList = document.getElementById("carsList");
  carsList.innerHTML = "";

  for (var i = 0; i < cars.length; i++) {
    var car = cars[i];
    var card = document.createElement("div");
    card.className = "car";
    card.innerHTML =
      "<img src='images/" + car.image + "' width='200'><br>" +
      "<b>" + car.name + "</b><br>" +
      "Price: ₹" + car.price + "/day<br><br>";
    carsList.appendChild(card);
  }
};
