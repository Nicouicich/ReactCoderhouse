import React from "react";
import ItemCount from "../ItemCount/ItemCount";

export default function Item ({product}) {






  return (
    <div className="col-md-4 product">
      <div className="card ">
        <div className="card-body">
          {product.title}
        </div>
        <div className="extra">
          <img src={product.pictureUrl} className="img-top" alt="" />
        </div>
        <div>
          <h4>{product.price}</h4>

          <p>{product.description}</p>
        </div>
        <div>
          <p><ItemCount stock={product.stock} initial="1"  varieties={product.varieties}/></p>
        </div>
      </div>
    </div>
  )
}