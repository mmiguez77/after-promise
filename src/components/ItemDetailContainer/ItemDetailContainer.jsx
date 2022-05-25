import { useEffect, useState } from "react"


import ItemDetail from "./ItemDetail";
import Loading from "../Loading/Loading";
import getItems from "../../functions/getItems"  


function ItemDetailContainer(){
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     getItems
       .then((res) => setProducto(res.find(prod => prod.id === 4 )))
       .catch((err) => console.log(err))      
       .finally(()=> setLoading(false))
  }, []);

   return(
       <>
        {
         loading  
        
        ? 
        
        <Loading/>
        
        : 

        <ItemDetail 
          prod={producto} 
          key={producto.id} 
        />
        }
      </>

   )

}


export default ItemDetailContainer