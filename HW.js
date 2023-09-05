const base_url = "https://api.freecurrencyapi.com/v1"
const API_KEY = "fca_live_85y6Z9qYC82c5ou7NOLCPQ9oD0G7jCysz33gwH8B"

let keysVal = []
let keysVal2 = []
const input = document.querySelector('input[type="text"]');
let actualC = []

fetch(`${base_url}/currencies`,{
    headers: {
        apikey: API_KEY
    }
})
    .then(response=> response.json())
    .then(res => {
        keysVal = (Object.keys(res.data))
        keysVal2 = Object.values(res.data)
        console.log(keysVal2)
        for (let i = 0; i < keysVal.length; i++) {
            let options = document.createElement('option')
            options.value = keysVal[i]
            options.text = keysVal[i] +" - " + keysVal2[i].name
            document.getElementById('convertTo').appendChild(options)
            let options2 = document.createElement('option')
            options2.value = keysVal[i]
            options2.text = keysVal[i] +" - " + keysVal2[i].name
            document.getElementById('convertFrom').appendChild(options2)
        }

        // keysVal.forEach(item => {
        //     let options = document.createElement('option')
        //     options.text = item
        //     document.getElementById('convertFrom').appendChild(options)
        //     document.getElementById('convertTo').appendChild(new Option(item))
        // })
    })


input.addEventListener('keypress', function(e){
    fetch(`${base_url}/latest?apikey=${API_KEY}&currencies=${document.getElementById('convertFrom').value}&base_currency=${document.getElementById('convertTo').value}`)
        .then(response => response.json())
        .then(res => document.getElementById('sumOfCalc').value = Object.values(res.data).toString() * document.getElementById('calc').value)
        .catch(error => console.log('error', error));
});

fetch(`${base_url}/latest?apikey=${API_KEY}&currencies=EUR%2CGBP%2CCAD%2CMXN%2CJPY`,{
    headers: {
        apikey: API_KEY
    }
})
.then(response=> response.json())
    .then(res =>  {
        console.log(res)
        actualC = res.data
        let keys = Object.keys(actualC)
        let values = Object.values(actualC)
        for (let i = 0; i < keys.length; i++) {
            let p = document.createElement('p')
            p.innerHTML = keys[i] + " " + values[i].toFixed(4)
                document.getElementById('ratesToday').appendChild(p)
        }

    })