function updateOptions() {
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  let vehicle = document.getElementById("vehicle");
  let price = document.getElementById("price");

  vehicle.innerHTML = "";

  if (from === "Jammu" && to === "Kashmir") {
    vehicle.innerHTML = `<option>Taxi</option>`;
    price.innerText = "₹1500";
  } else {
    vehicle.innerHTML = `
      <option>Bus</option>
      <option>Taxi</option>
    `;
    price.innerText = "Select vehicle";
  }
}

function bookRide() {
  alert("Ride Booked Successfully!");
}

document.getElementById("from").onchange = updateOptions;
document.getElementById("to").onchange = updateOptions;

updateOptions();
