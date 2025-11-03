window.onload = function () {
  var carsList = document.getElementById("carsList");

  var cars = [
    { name: "Maruti Swift", price: 1500, image: "swift.jpg" },
    { name: "Hyundai i20", price: 1800, image: "i20.jpg" },
    { name: "Tata Nexon", price: 2500, image: "nexon.jpg" },
    { name: "Toyota Innova", price: 3000, image: "innova.jpg" },
    { name: "Honda City", price: 2800, image: "city.jpg" }
  ];

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
