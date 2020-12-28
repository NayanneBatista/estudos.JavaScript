function calcular() {

var valueInicio = (document.getElementById("inicio").value)
var valueFim = (document.getElementById("fim").value)
var valuePasso = (document.getElementById("passo").value)
var res = document.getElementById("res")
var sequencia = ""

    if (valueInicio.lenght != 0 && valueFim.lenght != 0 && valuePasso.lenght != 0) {
        var inicio = Number(valueInicio)
        var fim = Number(valueFim)
        var passo = Number(valuePasso)
        if (passo == 0) {
            passo = 1
        }
        for(var i = inicio; i <= fim; i+passo) {
            sequencia += (i + " ")
        }
        res.innerText = sequencia

    } else {
        alert("Erro! Insira valor(es) faltante(s)")
    }
}    

    

