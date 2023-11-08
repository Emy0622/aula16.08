//value = serve para fazer com que o número um seja só o que for digitado e não a tag toda 

'use strict'
const botaoSomar = document.getElementById('somar')

function somar() {
    const numero1 = parseInt(document.getElementById('numero1').value)
    const numero2 = parseInt(document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')

    const total = numero1 + numero2

    resultado.textContent = total

}
botaoSomar.addEventListener('click', somar)



const botaoIdentificar = document.getElementById('identificar')

function identificar() {
    const numero = Number(document.getElementById('numero-item2').value)
    const resultado = document.getElementById('resultado-item2')
    let msg
    if (numero > 0) {
        msg = 'positivo'
    } else if (numero < 0) {
        msg = 'negativo'
    } else {
        msg = 'zero'
    }

    resultado.textContent = msg
}
botaoIdentificar.addEventListener('click', identificar)



const botaoMedia = document.getElementById('calculo')

function calculo() {
    const nota1 = Number(document.getElementById('nota1').value)
    const nota2 = Number(document.getElementById('nota2').value)
    const nota3 = Number(document.getElementById('nota3').value)
    const nota4 = Number(document.getElementById('nota4').value)
    const notaFinal = (nota1 + nota2 + nota3 + nota4)
    const notaDefinitiva = notaFinal / 4

    media.textContent = notaDefinitiva

    let mostrar
    if (notaDefinitiva >= 7) {
        mostrar = ('Aprovado' + notaDefinitiva)

    } else if (notaDefinitiva < 7) {
        const nota5 = prompt('Digite sua nota de exame:')
        const notaFinal2 = (Number(notaDefinitiva) + nota5) / 2
        media.textContent = notaFinal2
    } else if (notaFinal2 >= 7) {
        mostrar = 'Aprovado'
    }



}

botaoMedia.addEventListener('click', calculo)