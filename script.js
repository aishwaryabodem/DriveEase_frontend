window.onload = function () {
  var carsList = document.getElementById("carsList");

  // Your real car data (frontend only)
  var cars = [
    { name: "Maruti Suzuki Swift", price: 1500, image: "images/swift.jpg" },
    { name: "Tata Nexon", price: 2000, image: "images/nexon.jpg" },
    { name: "Hyundai Creta", price: 2500, image: "images/creta.jpg" },
    { name: "Mahindra XUV700", price: 3000, image: "images/xuv700.jpg" },
    { name: "Kia Seltos", price: 2700, image: "images/seltos.jpg" },
    { name: "Maruti Baleno", price: 2200, image: "images/Baleno.jpg" },
    { name: "Toyota Innova Crysta", price: 3200, image: "images/innova.jpg" },
    { name: "MG Hector", price: 2800, image: "images/hector.jpg" }
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
};
