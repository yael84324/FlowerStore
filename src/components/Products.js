import React ,{ useState } from "react"
import { getPosts } from "../services.js/posts.service"
import { TextField,Button } from "@material-ui/core"
import {deletePosts} from '../services.js/posts.service'
import  useBasketContext  from './useBasketContext'
import ImageComponent from './LoadImage'
export default function Products()
{
    const {basketProducts,sumBasket ,setBasketProducts,addToBasket,setSumBasket,countBasket,setCountBasket} = useBasketContext()

    const [products,setProduct]=useState([])
    const [search,setSearch]=useState([])

    function handleChange(event) {
        setSearch(event.target.value)
    }

    function searching() {
        const searchTerm = search.toLowerCase();
        const filteredProducts = products.filter((product) => {
            return product.name.toLowerCase().includes(searchTerm) ||
                  product.description.toLowerCase().includes(searchTerm);
        });   
        setProduct(filteredProducts);
      }

    React.useEffect(() => {
        async function getApiPosts() {
            const apiPosts = await getPosts()
            setProduct(apiPosts)
        }
        getApiPosts()
    }, [])

    function ToDelete(obj){
        deletePosts(obj._id)
        setProduct(products.filter((p)=>p._id!=obj._id))
    }
    
    return <form className="form"> 
        <TextField value={search} onChange={handleChange} name='search' label="מה אתה רוצה לחפש?"/><br /> 
        <Button onClick={searching}>search</Button>
        <h3>The most pampering</h3>
        <div className="product-list" >
            {products.map((product) => (
            <div key={product._id} className="product">
                <ImageComponent imageName={product.image} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <Button onClick={()=>{addToBasket(product)}}>add to basket</Button>
                <Button onClick={()=>{ToDelete(product)}}>🗑</Button>
            </div>
            ))}
        </div>
    </form> 
}




