import { render } from "./info.js";

const getiaqui = async() =>{
    const response = await fetch('https://api.waqi.info/feed/here/?token=eb2d113506de5173456795391b05a74625e4223a')
    const {data} = await response.json()
    console.log(data)

    const datos = data.city
    console.log("datos",datos)
    render(datos)

   const dia = data.forecast.daily.o3.map((x) => x.day)
   day = dia
   console.log(dia) 

   const max = data.forecast.daily.o3.map((x) => x.max)
   o3 = max
   console.log(max)

}

export let day = [];
export let o3 = [];

export default getiaqui;