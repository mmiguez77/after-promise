import Card from 'react-bootstrap/Card'

// components
import ItemCount from "../ItemCount/ItemCount"

function Item( { product } ) {

    const { title, img, stock, price, category, initial } = product


    const onAdd = (count) => {
        console.log(` Se agregaron ${ count } productos`)
    }

    return (
        <div> 
 
                
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ img } />
            <Card.Body>
                <Card.Title> { title } </Card.Title>
                <Card.Text>Categoria: { category }</Card.Text>
                <Card.Text><span>Precio: $ { price }</span></Card.Text>                        
            </Card.Body>
            <ItemCount onAdd={ onAdd } stock={ stock } initial={ initial } />
            </Card>


        </div>
    )
}


export default Item