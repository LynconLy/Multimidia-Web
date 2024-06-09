function calcular() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var imc = peso/(altura * altura);

    if (imc < 20) {
        document.write("IMC: " + imc + "<br>");
        document.write("<h2>Abaixo do peso</h2>");
    }
    else if (imc >= 20 && imc < 25) {
        document.write("IMC: " + imc + "<br>");
        document.write("<h2>Peso ideal</h2>");
    }
    else {
        document.write("IMC: " + imc + "<br>");
        document.write("<h2>Acima do peso</h2>");
    }
}