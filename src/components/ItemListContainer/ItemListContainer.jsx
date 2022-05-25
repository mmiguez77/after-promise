import { useEffect, useState } from 'react';
import getItems from '../../functions/getItems';

// components
import Loading from '../Loading/Loading';
import ItemList from './ItemList';

function ItemListContainer( ){

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')


  useEffect(() => {
    
    async function getProductsMock() {

      try {
        const response = await getItems
        setProducts(response)
        setLoading(false)
      } catch (error) {
        setError(error)
      } 
    }

    getProductsMock()

  }, [])
  
  return(
    <>
      {
        ( loading  )
        
        ?

        ( <Loading/> ) 
        
        :

        <div>
          <h1 className="my-5 text-center">Tienda</h1>
            <ItemList products={products}/>
        </div>
      }
      {error && <div className="text-center mt-5"><h1> { error } </h1></div> }
  </>
  )
   
}

export default ItemListContainer;