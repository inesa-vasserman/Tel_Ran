const base_url = "https://api.apilayer.com/fixer"
const API_KEY = "opbtUd3tqQkPPwh0YqmCF6WgQw8kJgTJ"
let keysVal = []


// const myHeaders = new Headers();
const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: {
    apikey: API_KEY
    }
};

 fetch(`${base_url}/symbols`,{
     headers: {
         apikey: API_KEY
     }
 })
     .then(response=> response.json())
     .then(res => {
         keysVal = (Object.keys(res.symbols))
         for (let i = 0; i < keysVal.length; i++) {
             let options = document.createElement('option')
             let options2 = document.createElement('option')
             options.value = keysVal[i]
             options.text = keysVal[i]
             document.getElementById('convertTo').appendChild(options)
             options2.value = keysVal[i]
             options2.text = keysVal[i]
             document.getElementById('convertFrom').appendChild(options2)

         }
     })



calculate.onclick = function () {

    fetch(`https://api.apilayer.com/fixer/convert?to=${document.getElementById('convertTo').value}&from=${document.getElementById('convertFrom').value}&amount=${document.getElementById('sumOfCalc').value}`, requestOptions)
        .then(response => response.json())
        .then(res => document.getElementById('resultOfConver').innerHTML = res.result)
        .catch(error => console.log('error', error));

}