function lacoFor() {
  var cx = document.getElementById("caixa");

  for (var i = 1; i <= 10; i++) {
    cx.innerHTML += i + "<br>";
  }
}

function lacoWhile() {
  var cx = document.getElementById("caixa");

  var i = 1;
  while (i <= 10) {
    cx.innerHTML += i + " - Vem do While <br>";
    i++;
  }
}

function lacoDoWhile() {
  var cx = document.getElementById("caixa");

  var i = 1;

  do {
    cx.innerHTML += "Contagem DoWhile " + i + "<br>";
    i++;
  } while (i <= 10);
}
