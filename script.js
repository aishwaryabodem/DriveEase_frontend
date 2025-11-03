var backendURL = "http://localhost:3000/api/cars";

window.onload = function () {
  var carsList = document.getElementById("carsList");
  var carSelect = document.getElementById("carSelect");

  var request = new XMLHttpRequest();
  request.open("GET", backendURL, true);

  request.onload = function () {
    if (request.status === 200) {
      var cars = JSON.parse(request.responseText);

      if (carsList) {
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
    } else {
      if (carsList) carsList.innerHTML = "Failed to load car data.";
      if (carSelect) {
        var option = document.createElement("option");
        option.textContent = "Error loading cars";
        carSelect.appendChild(option);
      }
    }
  };

  request.send();
};
