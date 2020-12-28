
function calcularIdade() {
    var anoNasc=document.getElementById("anoNasc").value
    //document.write(anoNasc)
    var idade= (2020 - Number(anoNasc))
    //document.write(idade)
    var cMasc = document.getElementById("cMasc").checked
    var cFem = document.getElementById("cFem").checked
    if (cMasc==true) {
        document.write(`Detectamos um homem com ${idade} anos.`)
    }
    else {
        document.write(`Detectamos uma mulher com ${idade} anos.`)
    }    
}