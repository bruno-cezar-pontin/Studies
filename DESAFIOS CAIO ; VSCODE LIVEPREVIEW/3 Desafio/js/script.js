$(document).ready(function () {
  $("#namereg").html(window.localStorage.getItem("name"));
  $("#agereg").html(window.localStorage.getItem("age"));
  $("#sexoreg").html(window.localStorage.getItem("sexo"));
});
