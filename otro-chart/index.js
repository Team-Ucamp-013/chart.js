// Repo de APIS: https://github.com/public-apis/public-apis#cryptocurrency 
// Link: https://docs.chain.link/any-api/get-request/examples/array-response 

//  const getBlockchain = async() =>{
//      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
//      const data = await response.json()
//      console.log(data)
//  }

//  getBlockchain()

const getBlockchain = async () => {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
      if (!response.ok) {
        throw new Error('Error en la solicitud: ' + response.status);
      }
      const data = await response.json();
      renderChart(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  getBlockchain();
  
  const renderChart = (data) => {
    // Extrae los nombres de las criptomonedas y sus valores de mercado
    const labels = data.map((coin) => coin.name);
    const marketCaps = data.map((coin) => coin.market_cap);
  
    // Configura los datos y opciones del gráfico de barras
    const chartData = {
      labels: labels,
      datasets: [
        {
          label: 'Valor de mercado (USD)',
          data: marketCaps,
          backgroundColor: 'rgba(54, 162, 235, 0.5)', // Color de fondo de las barras
          borderColor: 'rgba(54, 162, 235, 1)', // Color del borde de las barras
          borderWidth: 1
        }
      ]
    };
  
    const chartOptions = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function (value, index, values) {
              // Formatea los valores de los ejes y añade una etiqueta de unidad
              return '$' + value.toLocaleString();
            }
          }
        }
      }
    };
  
    // Renderiza el gráfico utilizando Chart.js
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: chartOptions
    });
  };
  

// Block Chain
// https://docs.helium.com/api/blockchain/chain-variables
//  const getAPI = async() =>{
//      const response = await fetch('https://api.helium.io/v1/vars')
//      const data = await response.json()
//      console.log(data.data)
//  }
//  getAPI()

//Currency RATES API
// https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/2022-11-24/currencies/eur.json
  
//  const getCurrency = async() =>{
//      const response = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/2022-11-24/currencies/eur.json')
//      const data = await response.json()
//      console.log(data)
//  }
//  getCurrency()