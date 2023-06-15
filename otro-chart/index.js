// Repo de APIS: https://github.com/public-apis/public-apis#cryptocurrency 
// Link: https://docs.chain.link/any-api/get-request/examples/array-response 

//  const getBlockchain = async() =>{
//      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
//      const data = await response.json()
//      console.log(data)
//  }

//  getBlockchain()

const getBlockchain = async () => {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
  const data = await response.json();
  displaychart(data)
  };
  
  getBlockchain();

const displaychart = (data) => {
     const chart = document.getElementById('myChart')

      const labels = data.map((coin) => coin.name);
     const marketCaps = data.map((coin) => coin.market_cap);

      new Chart(chart, {
         type: 'bar',
         data: {
           labels: labels,
           datasets: [{
             label: 'Valor de Mercado en USD',
             data: marketCaps,
             borderWidth: 1
           }]
         },
         options: {
           scales: {
               y: {
               beginAtZero: true
            }
           }
         }
       });

}


// Block Chain- No trae datos importantes
// https://docs.helium.com/api/blockchain/chain-variables


//Currency RATES API
// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/2022-11-24/currencies/eur.json
  
  const getCurrency = async() =>{
      const response = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/2022-11-24/currencies/eur.json')
      const datos = await response.json()
      console.log(datos.eur)
      renderchart(datos)
  }
 getCurrency()

 const renderchart = (datos) => {
  const chart = document.getElementById('myChart2')

  const dates = Object.keys(datos);
  console.log(dates)
  const exchangeRates = datos.eur
  console.log(exchangeRates)


   new Chart(chart, {
      type: 'bar',
      data: {
        labels: dates,
        datasets: [{
          label: 'Tasa de cambio EUR',
          data: exchangeRates,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
            y: {
            beginAtZero: true
         }
        }
      }
    });

}

//API Historica del bitcoin- Nosirve
//https://api.coindesk.com/v1/bpi/historical/close.json

 const getRestaurantes = async() =>{
   const response = await fetch('https://restcountries.com/v3.1/all')
   const data = await response.json()
   console.log(data)
  renderizarchart(data)
 }
 getRestaurantes(); 


const renderizarchart = (data) => {
   const chart = document.getElementById('myChart3')

const countries = data.map((country) => country.name.common);
const populations = data.map((country) => country.population);


    new Chart(chart, {
       type: 'bar',
       data: {
         labels: countries,
         datasets: [{
           label: 'Población',
           data: populations,
           borderWidth: 1
         }]
       },
       options: {
         scales: {
             y: {
             beginAtZero: true
          }
         }
       }
     });
 }

