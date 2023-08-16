'use strict'

const botaoSomar = document.getElementById('somar')
const botaoIdentificar = document.getElementById('identificar')
const botaoCalcularM = document.getElementById('calcular')


botaoSomar.addEventListener('click', somar)


function somar(){
    const numero1 = parseInt(document.getElementById('numero1').value)
    const numero2 = parseInt(document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')

    const total = numero1 + numero2

    resultado.textContent = total
}


botaoIdentificar.addEventListener('click', identificar)

function identificar() {
const numero = Number (document.getElementById('numero-item2').value)
const resultado = document.getElementById('resultado-item2')
let msg
if (numero > 0) {
    msg = 'positivo'
}else if(numero < 0){
    msg = 'negativo'
}else{
    msg = 'zero'
}

resultado.textContent = msg

}

botaoCalcularM.addEventListener('click', calcular)
function calcular() {
    const bi1 = parseInt(document.getElementById('n1').value)
    const bi2 = parseInt(document.getElementById('n2').value)
    const bi3 = parseInt(document.getElementById('n3').value)
    const bi4 = parseInt(document.getElementById('n4').value)

    const resultado = document.getElementById('resultadoM')

    const total = numero1 + numero2

    resultado.textContent = total

}

