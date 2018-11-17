const $tekst = document.getElementById("tekst")
const $przycisk = document.getElementById("przycisk")
const $tablica = document.getElementById("tablica1")
const tablica = [1,5,11,400]

$przycisk.addEventListener("click", function() {
    const valueFromInput = $tekst.value 
    dodajDoTablicy(valueFromInput)
})

function dodajDoTablicy(value){
    value = parseFloat(value)

    if(isNaN(value)){
        value = Math.floor(Math.random() *20 ) +1
    }

    tablica.push(value)
    pokazWiadomosc(value, tablica.length)
    $tablica.textContent = tablica
}

function pokazWiadomosc(value, index){
    const $rezultat = document.getElementById("rezultat")
    const text = `dodano wartosc ${value} na pozycji ${index}`
    $tablica.textContent = text
}

