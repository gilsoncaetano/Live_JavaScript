function Veiculo() {
  var placa = prompt("Digite a Placa do carro.", "BBB-2020");

  // 1 2 3 4 5 6 7 8
  // B B B - 2 0 2 0
  // 0 1 2 3 4 5 6 7

  if (placa.length < 8 || placa.length > 8) {
    alert("Digite a placa completa como esta no exemplo");
  } else {
    var rodizio = placa.substring(7, 8);

    console.log(Veiculo);
    if (rodizio == 3 || rodizio == 4)
      alert("Veiculo esta proibido trafega na terça-feita");
  }
}
