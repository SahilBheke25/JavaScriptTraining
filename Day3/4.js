// 4. Create a blog list page that fetches a list of users from a mock API and adds them to a table on the page after loading. Add a button to sort the users by name. Add an input to filter the table by search. (Optional: Show “Loading...” or a loading spinner on the scre till the data loads).

let currentData = [];

async function getData() {
  const url = "https://reqres.in/api/users";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json();
    currentData = result.data;
    generateTable(result.data);
  } catch (error) {
    console.error(error.message);
  }
}

function generateTable(data) {
  const tbody = document.getElementById("bodyTable");
  tbody.innerHTML = "";

  data.forEach((user) => {
    const row = document.createElement("tr");

    const idCell = document.createElement("td");
    idCell.textContent = user.id;
    row.appendChild(idCell);

    const nameCell = document.createElement("td");
    nameCell.textContent = user.first_name;
    row.appendChild(nameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = user.last_name;
    row.appendChild(lastNameCell);

    const emailCell = document.createElement("td");
    emailCell.textContent = user.email;
    row.appendChild(emailCell);

    tbody.appendChild(row);
  });
}

function sortTable() {
  currentData.sort((a, b) => a.first_name.localeCompare(b.first_name));
  generateTable(currentData);
}

function filterTable() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const filteredData = currentData.filter((user) => {
    return (
      user.first_name.toLowerCase().includes(searchInput) ||
      user.last_name.toLowerCase().includes(searchInput)
    );
  });
  generateTable(filteredData);
}

getData();