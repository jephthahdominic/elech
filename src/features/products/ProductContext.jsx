import { createContext, useCallback, useContext, useState } from "react";
import { database } from "../../services/firebaseConfig";
import { ref, onValue, query, orderByChild, equalTo, startAt, endAt } from "firebase/database";

const ProductContext = createContext();

export function ProductsProvider({children}){
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    function getProducts(){
        const dbRef = ref(database, 'products');
        onValue(dbRef, (snapshot)=>{
            const data = snapshot.val();
            if(data){
                const products = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key]
                }))
                setProducts(products);
                setIsLoading(false)
            }else{
                throw new Error("Failed to fetch data")
            }
        })
    }
    
    const getProductById = useCallback((id, callback)=>{
        const productRef = ref(database, `products/${id}`);
        onValue(productRef, (snapshot)=>{
            const data  = snapshot.val();
            if(data){
                callback({
                    id,
                    ...data
                })
            }else{
                throw new Error("Product not found")
            }
        })
    }, [])

    const searchDatabaseByName = useCallback((searchQuery, callback) =>{
        const dbRef = ref(database, 'products');
        onValue(dbRef, (snapshot)=>{
            const data = snapshot.val();
            if(data){
                const results = Object.keys(data).map((key)=>({
                    id: key,
                    ...data[key]
                })).filter(result => result.name.toLowerCase().includes(searchQuery.toLowerCase()) || result.category.toLowerCase().includes(searchQuery.toLowerCase()) )
                console.log(results)
                callback(results)
            }else{
                callback([])
            }
        })
    },[])


    return (
        <ProductContext.Provider value={{
            products, 
            isLoading,
            setIsLoading,
            getProducts, 
            getProductById,
            searchDatabaseByName
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export function useProducts(){
    const context = useContext(ProductContext);
    if(context === undefined) throw new Error("Context cannot be used outside its provider");
    return context
} 
