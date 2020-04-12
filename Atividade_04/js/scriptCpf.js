function Cpfvalido() {
  var cpfCliente;
  var cpf9;
  var cpf10;
  var contagem1 = 10;
  var contagem2 = 11;
  var resto = 0;
  var rs1 = 0;
  var rs2 = 0;
  var cpffinal;

  cpfCliente = prompt("Digite o seu CPF.");
  cpf9 = cpfCliente.substring(0, 9);

  for (var i = 0; i < cpf9.length; i++) {
    rs1 += cpf9[i] * contagem1;

    contagem1--;
  }

  resto = rs1 % 11;

  if (resto < 2) cpf10 = cpf9 + "0";
  else cpf10 = cpf9 + "" + (11 - resto);

  for (var i = 0; i < cpf10.length; i++) {
    rs2 += cpf10[i] * contagem2;
    contagem2--;
  }

  resto = rs2 % 11;
  if (resto < 2) cpffinal = cpf10 + "0";
  else cpffinal = cpf10 + "" + (11 - resto);

  if (cpfCliente == cpffinal) {
    alert("CPF Esta Válido");
  } else {
    alert("CPF inválido");
  }
}
