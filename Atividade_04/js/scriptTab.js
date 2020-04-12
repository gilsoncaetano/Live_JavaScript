function tabuada() {
  var n = prompt("Digite um número para a tabuada");

  for (var p = 1; p <= 10; p++) {
    document.getElementById("saida").innerHTML +=
      n + " x " + p + " = " + n * p + "<br>";
  }
}

function tabelaDeCores() {
  var exibir = "<div>";
  var tabela = "<table>";

  for (var linha = 1; linha <= 30; linha++) {
    tabela += "<tr>";
    for (var coluna = 1; coluna <= 50; coluna++) {
      var r = Math.round(Math.random() * 254);
      var g = Math.round(Math.random() * 254);
      var b = Math.round(Math.random() * 254);

      tabela +=
        "<td style=background-color:rgb(" +
        r +
        "," +
        g +
        "," +
        b +
        ")>" +
        r +
        "," +
        g +
        "," +
        b +
        "</td>";
    }
    tabela += "</tr>";
  }
  tabela += "</table>";

  exibir += tabela;
  document.getElementById("saida").innerHTML = exibir;
}
