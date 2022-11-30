fetch(
  "https://www.randomnumberapi.com/api/v1.0/randomstring?min=5&max=20&count=10"
)
  .then((response) => {
    return response.json();
  })
  .then(function (data) {
    for (let i = 0; i < 5; i++) {
      let tr = tbody.insertRow();
      let td_nome = tr.insertCell();
      let td_n_letras = tr.insertCell();
      let td_n_vogals = tr.insertCell();

      td_nome.innerHTML = data[i];
      td_n_letras.innerHTML = data[i].length;

      const countVowels = (str) =>
        Array.from(data[i]).filter((letter) => "aeiouAEIOU".includes(letter))
          .length;

      td_n_vogals.innerHTML = countVowels(data[i]);
    }
  });
