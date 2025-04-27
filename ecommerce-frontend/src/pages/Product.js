import React, { useEffect, useState } from "react";
import { getapi } from "../services/Api";
import { Link } from "react-router-dom";


    const Product = () => {
        const [products, setProducts] = useState([]);
      
        useEffect(() => {
            getapi("store/products/")
            .then((data) => setProducts(data))
            .catch((err) => console.log(err));
        }, []);

  return (
    <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
        {products.map((product) => (
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1"  key={product.id}>
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src={product.image} alt={product.name} />
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">{product.name}</h6>
                        <div className="d-flex justify-content-center">
                           <h6 className="text-muted ml-2"><del>{product.price}</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                    <Link to={`/products/${product.id}`}><a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a></Link>
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </div>
  );
};




export default Product;
