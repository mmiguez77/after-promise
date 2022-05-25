import { useState } from 'react'
import { Button } from 'react-bootstrap'

function ItemCount ( { stock, initial, onAdd } ) {
    
    const [count, setCount] = useState(initial)
     
    function handleIncrease() {
         if (count < stock){
             setCount(count + 1)
         }
     }

     function handleDecrease() {
         if(count > initial ){
             setCount(count - 1)
         }       
     }
 
     return(

        <div className="d-flex justify-content-center">
            <div>
                <button className="btn-sm btn-success" onClick={ handleDecrease }> - </button>
                    <span className="mx-5"> { count } </span>                        
                <button className="btn-sm btn-success" onClick={ handleIncrease }> + </button>
            <div className="my-3 d-flex justify-content-center" >
                <Button variant="primary" onClick={ () => onAdd( count ) }>Comprar</Button>
            </div>
            </div>
                
            
        </div>
                    

     )
 }


export default ItemCount;