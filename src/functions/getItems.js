import { productsMock } from "../data/productsMock"


const getItems = new Promise((res, rej) => {
    let condition = true;
    if (condition) {
        setTimeout(() => {
            res(productsMock)
        }, 3000);
    } else {
        rej("Error al cargar productos");
    }        
  })

    

export default getItems