import React, {useEffect,useState}  from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Products = ()=>{
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState([]);
    useEffect(()=>{
        (async()=>{
            await getProducts();
        })()
    },[])
    console.log({products});
    const getProducts = async () =>{
        try{
            setLoading(true)
            const response = await fetch('https://dummyjson.com/products')
            const result = await response.json();
            setProducts(result.products);
            setLoading(false);
        }
        catch(error){
            console.log(error.message);
        }
    }
    if(loading){
        return <h2>Loading...</h2>
        
    }
    return(
        
        <div >
        <Link><button >Add product</button></Link>
            <div className="products">
            <h2>List of Products</h2>
            {products.map(item=>(
                <div key={item.id}>
                    <img src={item.thumbnail} />
                    <h3>{item.title}</h3>
                    {/* <p>Description</p>
                    <p>{item.price}</p>
                    <h1>{item.discountpercentage}</h1> */}
                </div>
            ))}
        </div>
        </div>

    )
}
export default Products;