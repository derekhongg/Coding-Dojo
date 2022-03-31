import React, { useState } from "react";
import Product from "../components/Product";
import DisplayAll from "../components/AllProducts";

const Main = (props) => {
    const [productList, setProductList] =  useState([]);

    return(
        <div>
            <Product
                productList={productList}
                setProductList = {setProductList}
            />
            <DisplayAll
                productList={productList}
                setProductList={setProductList}
            />
        </div>
    )

}

export default Main;