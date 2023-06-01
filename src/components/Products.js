import React ,{ useEffect, useState } from "react"
import { getPosts } from "../services.js/posts.service"
import { useNavigate } from 'react-router-dom'
import { TextField,Button } from "@material-ui/core"
import ImageOfProduct from "../images/good-morning.jpg"
import {deletePosts} from '../services.js/posts.service'
import  useBasketContext  from './useBasketContext'
import bouquet from '../images/nice colorful.jpg';
import ImageComponent from './LoadImage'
export default function Products()

{

    const navigate = useNavigate()
    const {basketProducts,sumBasket ,setBasketProducts,addToBasket,setSumBasket,countBasket,setCountBasket} = useBasketContext()

    const [products,setProduct]=useState([])
    const [search,setSearch]=useState([])

    function handleChange(event) {
        setSearch(event.target.value)
    }
    function searching() {

        const searchTerm = search.toLowerCase();
        console.log("search");
        const filteredProducts = products.filter((product) => {
          return product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm);
        });
      
        setProduct(filteredProducts);
      }
    


    function GoToAddToBasket(obj){

    }
    React.useEffect(() => {//בגלל שזה קריאת שרת SIDE EFFECT- שלוקחת זמן

        async function getApiPosts() {
          console.log("new all");
          // console.log(products)
            const apiPosts = await getPosts()
            setProduct(apiPosts)
        }
        getApiPosts()
    }, [])
    React.useEffect(()=>{

    },products)

    function ToDelete(obj){
        deletePosts(obj._id)
        setProduct(products.filter((p)=>p._id!=obj._id))
    }
    const getImage = async (product) => {
      const imageSrc = product.image ? JSON.parse(product.image)?.src : '';
      try {
        const imageModule = await import(`./images/${imageSrc}`);
        return imageModule.default;
      } catch (error) {
        console.error(`Error loading image: ${error}`);
        return '';
      }
    };
    return <form className="form"> 
     <TextField value={search} onChange={handleChange} name='search' label="מה אתה רוצה לחפש?"/><br /> 
    <Button onClick={searching}>search</Button>
        <h3>😚 המפנקים ביותר</h3>

    {/* {products.map((p)=><div key={p._id} onClick={()=>{toDetail(p)}}><img src={ImageOfProduct} alt="flower" className="little-img"/><p>{p.name}</p><p>{p.price}</p></div>)} */}
    <div className="product-list" >
      {products.map((product) => (
        <div key={product._id} className="product" onClick={GoToAddToBasket}>
          {/* <img src={product.image} alt={product.name} /> */}
          {/* <img src={product.image} alt={product.name} /> */}
          {/* {products.map((element) => (
        <img key={element.id} src={getImage(element)} alt={`Image ${element.id}`} />
      ))} */}
{/* <div className="image_bg" style={{ backgroundImage: "url('./images/top-view-flowers-with-copy-space.jpg')" }}></div> */}
      {/* {products.map((element) => ({
  id: element.id,
  src: getImage(element),
}))} */}
          <ImageComponent imageName={product.image} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <Button onClick={()=>{addToBasket(product)}}>הוסף לסל</Button>
          <Button onClick={()=>{ToDelete(product)}}>🗑</Button>
        </div>
      ))}
    </div>
    </form>
    
}




