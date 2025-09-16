var tableData = [];
function addData() {
  var day = document.getElementById("day").value;
  var time = document.getElementById("time").value;

  var info = {
    day:day,
    time:time
  }

  tableData.push(info);

  if (day == "" || time == "") {
    alert("These are the Required Values");
  } else {
    var html = "";

    html = `<tr><td> ${day} </td><td> ${time} </td><td> ${day} </td><td> ${time}</td></tr>`;

    if (document.getElementById("result") != null) {
      document.getElementById("result").innerHTML += html;
    }

    document.getElementById("day").value = "";
    document.getElementById("time").value = "";
  }
  console.log(tableData)
}
