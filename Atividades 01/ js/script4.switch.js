function Veiculo() {
  var placa = prompt("Digite a Placa do carro.", "BBB-2020");

  placa = placa.toUpperCase();

  if (placa.length < 8 || placa.length > 8) {
    alerta("Digite a placa completa como esta no exemplo");
  } else {
    var veiculo = placa.substring(7, 8);
    console.log(Veiculo);

    switch (veiculo) {
      case "3":
      case "4":
        veiculo = " Veiculo esta proibido trafega na terça-feita ";
        break;

      default:
        veiculo = " Veiculo esta Autorizado trafaga neste dia da semana ";
        break;
    }
    alert(" Atenção: " + veiculo);
  }
}
