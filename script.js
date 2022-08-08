let requestURL = `https://api.coingecko.com/api/v3/exchange_rates`;
let currency = parseInt(randInt(1,61));
let output = document.getElementById("currency");
function randInt(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}
function displayName(data){
    let currencyarray = Object.keys(data.rates)
    let key = currencyarray[currency]
    let nameObject = data.rates[key].name;
    let valueObject = data.rates[key].value;
    output.innerHTML = "1 Bitcoin = " + valueObject + " " + nameObject;
}
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(displayName)
    .catch(function (error) {
        console.log("Error during fetch:", error);
    });