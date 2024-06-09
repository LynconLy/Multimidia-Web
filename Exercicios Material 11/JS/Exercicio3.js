function entrar() {
    var salario = parseFloat(document.getElementById('salario').value);

    if (salario < 1000.0) {
        document.write("Reajuste: R$" + (salario * 0.15) + "<br>");
        document.write("<h2>Salário novo: R$" + (salario += (salario * 0.15)) + "</h2>");
    }
    else if (salario >= 1000.0 && salario < 1500) {
        document.write("Reajuste: R$" + (salario * 0.10) + "<br>");
        document.write("<h2>Salário novo: R$" + (salario += (salario * 0.10)) + "</h2>");
    }
    else {
        document.write("Reajuste: R$" + (salario * 0.05) + "<br>");
        document.write("<h2>Salário novo: R$" + (salario += (salario * 0.05)) + "</h2>");
    }
}