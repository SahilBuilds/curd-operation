let form = document.querySelector("form");
let nameInput = document.querySelector("#name")
let nameEmail = document.querySelector("#email")
let namePhone = document.querySelector("#phone")
let nameData = document.querySelector("#date")
let nameTime = document.querySelector("#time")
let nameGuests = document.querySelector("#guests")
let nameRequests = document.querySelector("#requests")
let bookingTableBody = document.querySelector("tbody");


let data = {};
let currentRow;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (currentRow) {
    let cells = currentRow.querySelectorAll("td");
    cells[1].textContent = nameInput.value;
    cells[2].textContent = nameEmail.value;
    cells[3].textContent = namePhone.value;
    cells[4].textContent = nameData.value;
    cells[5].textContent = nameTime.value;
    cells[6].textContent = nameGuests.value;
    cells[7].textContent = nameRequests.value;
    currentRow = null;
  } else {
    acceptData();
  }
  form.reset();
});


let acceptData = () => {
  data["name"] = nameInput.value;
  data["email"] = nameEmail.value;
  data["phone"] = namePhone.value;
  data["date"] = nameData.value;
  data["time"] = nameTime.value;
  data["guests"] = nameGuests.value;
  data["requests"] = nameRequests.value;
  createBooking();
}

let createBooking = () => {
  let newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${Math.floor(Math.random() * 1000)}</td>
    <td>${data.name}</td>
    <td>${data.email}</td>
    <td>${data.phone}</td>
    <td>${data.date}</td>
    <td>${data.time}</td>
    <td>${data.guests}</td>
    <td>${data.requests}</td>
    <td>occupied</td>
    <td>
      <button onclick="deleteBooking(this)">Delete</button>
      <button onclick="updateBooking(this)">Edit</button>
    </td>
  `;
  bookingTableBody.appendChild(newRow);
  form.reset();
};

let updateBooking = (e) => {
  currentRow = e.parentElement.parentElement;
  let cell = currentRow.querySelectorAll("td");

  nameInput.value = cell[1].textContent;
  nameEmail.value = cell[2].textContent;
  namePhone.value = cell[3].textContent;
  nameData.value = cell[4].textContent;
  nameTime.value = cell[5].textContent;
  nameGuests.value = cell[6].textContent;
  nameRequests.value = cell[7].textContent;
}

let deleteBooking = (e) => {
  e.parentElement.parentElement.remove();
};
