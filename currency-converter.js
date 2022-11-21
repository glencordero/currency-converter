let conversionDisplayDiv = document.querySelector("#conversion-display")

document.getElementById('convert').addEventListener('click', () => {
    fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json')
        .then(response => response.text())
        .then(data => displayInfo(JSON.parse(data)))
})

function displayInfo(info){
    let enteredAmount = document.querySelector("#amt").value
    let selectedCurrency = document.querySelector("#convert-to").value
    let conversionAnswer = enteredAmount / info.usd[selectedCurrency]
    conversionDisplayDiv.innerHTML = conversionAnswer
}

