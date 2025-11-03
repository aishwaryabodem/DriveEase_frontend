window.onload = function () {
  var carsList = document.getElementById("carsList");
  var carSelect = document.getElementById("carSelect");

  var cars = [
    { name: "Toyota Innova", price: 4000, image: "https://via.placeholder.com/200?text=Innova" },
    { name: "Hyundai i20", price: 2500, image: "https://via.placeholder.com/200?text=i20" },
    { name: "Swift Dzire", price: 2200, image: "https://via.placeholder.com/200?text=Swift" },
    { name: "Honda City", price: 3500, image: "https://via.placeholder.com/200?text=Honda+City" },
    { name: "Mahindra XUV700", price: 5000, image: "https://via.placeholder.com/200?text=XUV700" }
  ];

  if (carsList) {
    carsList.innerHTML = "";
    for (var i = 0; i < cars.length; i++) {
      var car = cars[i];
      var card = document.createElement("div");
      card.className = "car";
      card.innerHTML =
        "<img src='" + car.image + "' width='200'><br>" +
        "<b>" + car.name + "</b><br>" +
        "Price: ₹" + car.price + "/day<br><br>";
      carsList.appendChild(card);
    }
  }

  if (carSelect) {
    carSelect.innerHTML = "";
    for (var j = 0; j < cars.length; j++) {
      var option = document.createElement("option");
      option.value = cars[j].name;
      option.textContent = cars[j].name;
      carSelect.appendChild(option);
    }
  }
};
