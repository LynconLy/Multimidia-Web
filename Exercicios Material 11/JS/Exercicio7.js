var cand1 = 0;
var cand2 = 0;
var votoNulo = 0;
var votoBranco = 0;

function candidato1() {
    cand1 += 1;
}

function candidato2() {
    cand2 += 1;
}

function nulo() {
    votoNulo += 1;
}

function branco() {
    votoBranco += 1;
}

function resultado() {
    var totalVotos = cand1 + cand2 + votoNulo + votoBranco;
    
    document.write("<h2>O total de votos foi de " + totalVotos + "</h2>");
    
    document.write("<h3>O candidato 1 recebeu " + cand1 + " votos</h3>");
    document.write("Isso equivale a " + ((cand1/totalVotos)*100) + "% dos votos.<br>");
    
    document.write("<h3>O candidato 2 recebeu " + cand2 + " votos</h3>");
    document.write("Isso equivale a " + ((cand2/totalVotos)*100) + "% dos votos.<br>");
    
    document.write("<h3>A quantidade de votos nulos foi de " + votoNulo + "</h3>");
    document.write("Isso equivale a " + ((votoNulo/totalVotos)*100) + "% dos votos.<br>");

    document.write("<h3>A quantidade de votos em branco foi de " + votoBranco + "</h3>");
    document.write("Isso equivale a " + ((votoBranco/totalVotos)*100) + "% dos votos.<br>");
}