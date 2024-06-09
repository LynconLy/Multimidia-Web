function entrar() {
    var idade = parseInt(document.getElementById('idade').value);

    if (idade >= 5 && idade <= 7) {
        document.write("Idade: " + idade + "<br>");
        document.write("<h2>Infantil A</h2>");
    }
    else if (idade >= 8 && idade <= 10) {
        document.write("Idade: " + idade + "<br>");
        document.write("<h2>Infantil B</h2>");
    }
    else if (idade >= 11 && idade <= 13) {
        document.write("Idade: " + idade + "<br>");
        document.write("<h2>Juvenil A</h2>");
    }
    else if (idade >= 14 && idade <= 17) {
        document.write("Idade: " + idade + "<br>");
        document.write("<h2>Juvenil B</h2>");
    }
    else if (idade > 17) {
        document.write("Idade: " + idade + "<br>");
        document.write("<h2>Senior</h2>");
    }
    else {
        document.write("<h2>Idade inválida</h2>");
    }
}