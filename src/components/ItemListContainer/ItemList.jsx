import { Row, Container, Col } from 'react-bootstrap'

// components
import Item from './Item'

const ItemList = ({ products }) => {

  
    return (
        <>
            <Container >
                <Row>

            { 
                products.map((product)=> {

                    return (
                        <Col md={4} key={product.id} className="mb-5">
                            <Item product={product}/>
                        </Col>

                    )

                }      

                )
            }
                </Row>  
            </Container>
        </>
  )
}

export default ItemList