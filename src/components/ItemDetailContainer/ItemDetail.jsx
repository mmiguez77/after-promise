import ItemCount from "../ItemCount/ItemCount"


function ItemDetail ({ prod }){

    return (
        
        <div className="container mt-5" key={ prod.id } >
            <div className="row">
                <div className="col-md-6">
                    <img className="card-img-top" src={ prod.img } alt="alt" style={{ width: "500px"  }}/> 
                </div>
                <div className="col-md-6 mt-5">
                    <h5 className="card-title-detail"> Articulo:  { prod.title }</h5>
                    <h6 className="price">Precio: $ { prod.price }</h6>
                <ItemCount/>

                </div>
            </div>
        </div>
    )
  }

  export default ItemDetail