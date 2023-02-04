// const getapi = async() => {
//     const response = await fetch('https://api.waqi.info/feed/here/?token=eb2d113506de5173456795391b05a74625e4223a')
//     const {data} = await response.json()
//     console.log(data)

//     const dia = data.forecast.daily.o3.map((x)=> x.day)
 
//     day.push(dia)
//     console.log(dia)

//     const max = data.forecast.daily.o3.map((x) => x.max)
  
//     o3.push(max)
//     console.log(max)
// }

// getapi()

// let day = [];
// let o3 = [];

// const displaychart = async() => {
//     const chart = document.getElementById('myChart')
//      await getapi()

//      new Chart(chart, {
//         type: 'bar',
//         data: {
//           labels: day,
//           datasets: [{
//             label: 'Calidad del aire',
//             data: o3,
//             borderWidth: 1
//           }]
//         },
//         options: {
//           scales: {
//             y: {
//               beginAtZero: true
//             }
//           }
//         }
//       });


// }


// displaychart()


const getiaqui = async() =>{
    const response = await fetch('https://api.waqi.info/feed/here/?token=eb2d113506de5173456795391b05a74625e4223a')
    const {data} = await response.json()
    console.log(data)

   const dia = data.forecast.daily.o3.map((x) => x.day)
   day = dia
   console.log(dia) 

   const max = data.forecast.daily.o3.map((x) => x.max)
   o3 = max
   console.log(max)

}
 
  getiaqui()


   let day = [];
   let o3 =[];

  const displaychart = async() => {
      const ctx = document.getElementById('myChart');
      await getiaqui()

      new Chart(ctx, {
       type: 'bar',
       data: {
         labels: day,
         datasets: [{
           label: 'Calidad del aire maximo',
           data: o3,
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

  const displaychart2 = async() => {
    const grafica = document.getElementById('myChart2')
    await getiaqui()

    new Chart(grafica, {
        type: 'line',
        data: {
          labels: day,
          datasets: [{
            label: 'Calidad del aire maximo',
            data: o3,
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

  const displaychart3 = async() => {
    const grafic = document.getElementById('myChart3')
    await getiaqui()

    new Chart(grafic, {
        type: 'doughnut',
        data: {
          labels: day,
          datasets: [{
            label: 'Calidad del aire maximo',
            data: o3,
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

  displaychart()
  displaychart2()
  displaychart3()