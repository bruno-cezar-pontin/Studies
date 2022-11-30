const url =
  "https://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=50";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then(function (data) {
    document.getElementById("numeros").innerHTML = data;

    for (let i = 0; i < data.length; i++) {
      var par = function (item) {
        return !(item % 2);
      };
      var impar = function (item) {
        return item % 2;
      };

      var dataPar = data.filter(par);
      document.getElementById("numeroPAR").innerHTML = dataPar;

      var dataImpar = data.filter(impar);
      document.querySelector("#numeroimpar").innerHTML = dataImpar;
    }

    function redirectpage() {
      window.location.href = "primeirapagina.html";
    }

    document.getElementById("btn").onclick = function () {
      location.href = "/primeirapagina.html";
    };
  });
