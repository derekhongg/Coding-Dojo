import React, {useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import DeleteButton from "./DeleteButton";

const DisplayAll = (props) => {
    
    const { productList, setProductList } = props;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setProductList(res.data);
            })
            .catch((err) => console.log(err))
    }, []);

    const deleteFilter = (idFromBelow) => {
                setProductList(productList.filter((product, index) => product._id !== idFromBelow))
    };

    return(
        <div>
            <header>
                All Products:
            </header>
            {
                productList.map((product, index) => (
                    <div key={index}>
                        <Link to={`/product/${product._id}`}>
                            {product.title}
                        </Link>
                        <button onClick={() => navigate(`/product/edit/${product._id}`)}>
                            Edit
                        </button>
                        <DeleteButton productId={product._id} successfulCallback={()=>deleteFilter(product._id)} />
                    </div>
                ))
            }
        </div>
    )

};

export default DisplayAll;