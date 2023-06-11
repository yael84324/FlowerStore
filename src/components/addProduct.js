import React ,{ useState } from "react"
import { useNavigate } from 'react-router-dom'
import {addPost} from '../services.js/posts.service'
import { TextField,Button } from "@material-ui/core"
import '../App.css'

export default function AddProduct() {
    const navigate = useNavigate()
    const [addProduct, setAddProduct] = useState({
                name: '',
                description: '',
                price: 0,
                image:''
            })

    function add() {
        addPost(addProduct).then(() => {
            setAddProduct({
                name: '',
                description: '',
                price: 0,
                image: ''
            });
        })
        handleSubmit()
    }

    function handleSubmit() {
        navigate('/home')
    }
    function cancel(){
        navigate('/home')
    }
    function handleChange(event) {
        const { name, value } = event.target
        setAddProduct({ ...addProduct, [name]: value })  
    }

    return <>
        <div className="botton-flowers">
            <form className="form">
                <h1>add product</h1>
                <TextField value={addProduct.name} onChange={handleChange} name='name' label="product name" varient="contained"/><br />
                <TextField value={addProduct.description} onChange={handleChange} name='description'  label="description"/><br />
                <TextField value={addProduct.price} onChange={handleChange} name='price' type='number' label="price"/><br />
                <TextField value={addProduct.image} onChange={handleChange} name='image' label="image src" varient="contained"/><br />
                <Button onClick={add}>send</Button>
                <Button onClick={cancel}>cancel</Button>
            </form>
        </div>
    </>
}
