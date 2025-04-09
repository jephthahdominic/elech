import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext";
import Loader from "../../ui/Loader";
import ProductDetails from "./ProductDetails";

export default function Product() {
    const {productId} = useParams();
    const {getProductById, isLoading} = useProducts();
    const [product, setProduct] = useState(null);

    const fetchProduct = useCallback(()=>{
        getProductById(productId, (result)=>{
          setProduct(result)
        });
    }, [getProductById, productId])
    
    useEffect(()=>{    
        fetchProduct();
    }, [fetchProduct])
    
    if(isLoading) return <Loader />

    return <ProductDetails product={product}/>
}
