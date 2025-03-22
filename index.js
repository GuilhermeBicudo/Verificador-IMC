function Resultado() {
  // Ouvinte dos inputs do html.
  const peso = document.querySelector("input#numPeso").value;
  const altura = document.querySelector("input#numAltura").value;
  const sexo = document.querySelector("input#txtsexo").value;
  const res = document.getElementById("res");

  // Convertendo valores para float.
  const pesoFloat = parseFloat(peso);
  const alturaFloat = parseFloat(altura);

  // Verificar se os valores são válidos.
  if (isNaN(pesoFloat) || isNaN(alturaFloat)) {
    res.innerText = "Por favor, insira valores válidos para peso e altura.";
    return;
  }

  // Cálculo do IMC.
  const calculo = pesoFloat / (alturaFloat * alturaFloat);

  // Lógica do programa.
  if (sexo.toLowerCase() == "masculino" || sexo.toLowerCase() == "feminino") {
    if (calculo < 18.5) {
      res.innerText = `Sexo: ${sexo} com o IMC abaixo do peso. IMC: ${calculo.toFixed(
        2
      )}`;
    } else if (calculo >= 18.5 && calculo <= 24.9) {
      res.innerText = `Sexo: ${sexo} com o IMC normal e o peso saudável. IMC: ${calculo.toFixed(
        2
      )}`;
    } else if (calculo > 24.9 && calculo <= 29.9) {
      res.innerText = `Sexo: ${sexo} com o IMC sobrepeso. IMC: ${calculo.toFixed(
        2
      )}`;
    } else {
      res.innerText = `Sexo: ${sexo} com o IMC de obesidade. IMC: ${calculo.toFixed(
        2
      )}`;
    }
  } else {
    res.innerText = "Sexo não reconhecido ou não suportado.";
  }
}

function Resetar() {
  // Limpar resposta.
  res.innerText = "";
}
