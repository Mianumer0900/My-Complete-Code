var userRecords = [];
var signUpForm = document.getElementById("sign-up");
signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  var formData = new FormData(signUpForm);

  var info = {
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    username: formData.get("username"),
    email: formData.get("email"),
  };

  userRecords.push(info);
  console.log(userRecords);

  var html = "";

  for (var i = 0; i < userRecords.length; i++) {
    html += `
    <tr>
    <td>${i + 1}</td>
    <td>${userRecords[i].firstname}</td>
    <td>${userRecords[i].lastname}</td>
    <td>${userRecords[i].username[i]}</td>
    <td>${userRecords[i].email[i]}</td>
    <td><button class="btn btn-danger btn-sm" onclick="deleteRecord(this)">Delete</button></td>
    </tr>
    `;
  }

  document.getElementById("table-Data").innerHTML = html;
});

// Delete Data

function deleteRecord(button) {
//   var deleteRow = button.parentNode.parentNode;
//   deleteRow.parentNode.removeChild(deleteRow);
var deleteRow = button.closest("tr"); 
  deleteRow.remove();
}

// function clearInputs() {
//   document.getElementById("firstname").value = "";
//   document.getElementById("lastname").value = "";
//   document.getElementById("username").value = "";
//   document.getElementById("email").value = "";
// }
