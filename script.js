
let resultadosArray = []


function limparDados(){
    window.location.reload()
}

function calcular(){
    let deslocamento = document.getElementById("valor-deslocamento").value
    let intervaloTempo = document.getElementById("valor-intervalo-tempo").value
    let resultado = parseFloat(deslocamento) / parseFloat(intervaloTempo)
    document.getElementById('resultado').value = resultado
 
    resultadosArray.push(resultado)

    document.getElementById('resultados-salvos').value = resultadosArray

}