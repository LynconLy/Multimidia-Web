
function entrar() {
    var salarioHora = parseFloat(928.47);
    var horaTrabalho = parseFloat(document.getElementById('hora').value);

    var salarioBruto = parseFloat(salarioHora * horaTrabalho);
    var salario = parseFloat(salarioBruto - (salarioBruto * 0.03));

    document.write("Horas: " + horaTrabalho + "h<br>");
    document.write("Salário bruto: R$" + salarioBruto + "<br>");
    document.write("<h2>Salário: R$" + salario + "</h2>");
}
