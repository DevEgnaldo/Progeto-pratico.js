const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert",) // Valor em real
  const currencyValueConverted = document.querySelector(".currency-value") //Outras moedas
 

  console.log(currencySelect.value)
  const dolarToday = 5.2
  const euroToday = 6.2
  const libraToday = 6.2
  const bitcoinToday = 126341.60

  if (currencySelect.value == "dolar") {
    // Se o select estiver selecionado o valor de Dolar, entre aqui!
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValue / dolarToday)
  }

  if (currencySelect.value == "libra") {
    // Se o select estiver selecionado o valor de libra, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday)
  }
 
  if (currencySelect.value == "euro") {
    // Se o select estiver selecionado o valor de Euro, entre aqui!
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrencyValue / euroToday)
  }
  if (currencySelect.value == "bitcoin") {
    // Se o select estiver selecionado o valor de Euro, entre aqui!
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "BTC"
    }).format(inputCurrencyValue / euroToday)
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(inputCurrencyValue)

}
  function changeCurrecy() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
      currencyName.innerHTML = "Dólar americano"
      currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
      currencyName.innerHTML = "Euro"
      currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
      currencyName.innerHTML = "Libra"
      currencyImage.src = "./assets/libra 1.png"
    }
    if (currencySelect.value == "bitcoin") {
      currencyName.innerHTML = "Bitcoin"
      currencyImage.src = "./assets/bitcoin 1.png"
    }
    convertValues()
    
  }

convertButton.addEventListener("click", convertValues)  
currencySelect.addEventListener("change", changeCurrecy)
