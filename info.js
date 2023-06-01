 export const render = (data) =>{

  let el = document.getElementById('element')
  el.innerHTML += `
  <p>${data.name}</p>
  `
 }
