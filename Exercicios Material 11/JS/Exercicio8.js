var quantPessoas = 0;
var totalIdade = 0;
var votoOtimo = 0;
var votoBom = 0;
var votoReg = 0;
var votoRuim = 0;

function calculaIdade() {
    var idade = parseInt(document.getElementById('idade').value);

    if (idade < 0) {
        alert("Idade Inválida");
        return 0;
    }

    totalIdade = totalIdade + idade;

    console.log(idade);
    console.log(totalIdade);
}

function otimo() {
    quantPessoas += 1;
    votoOtimo += 1;
}

function bom() {
    quantPessoas += 1;
    votoBom += 1;
}

function regular() {
    quantPessoas += 1;
    votoReg += 1;
}

function ruim() {
    quantPessoas += 1;
    votoRuim += 1;
}

function resultado() {
    document.write("<h2>O total de pessoas entrevistadas é " + quantPessoas + "</h2>");

    document.write("<h3>A média de idades foi de " + (totalIdade / quantPessoas) + "</h3>");

    document.write("<h4>" + ((votoOtimo / quantPessoas) * 100) + "% dos entrevistados achou o filme ótimo.</h4>");

    document.write("<h4>" + ((votoBom / quantPessoas) * 100) + "% dos entrevistados achou o filme bom.</h4>");

    document.write("<h4>" + ((votoReg / quantPessoas) * 100) + "% dos entrevistados achou o filme regular.</h4>");

    document.write("<h4>" + ((votoRuim / quantPessoas) * 100) + "% dos entrevistados achou o filme ruim.</h4>");
}