import React ,{ useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import {addPost,getPosts} from '../services.js/posts.service'
import { TextField,Button } from "@material-ui/core"
import '../App.css'
import { Add } from "@material-ui/icons"
export default function AddProduct() {

    const [products, setProducts] = React.useState([])
    const [addProduct, setAddProduct] = React.useState({
                name: '',
                description: '',
                price: 0,
                image:''
            })
        React.useEffect(() => {//בגלל שזה קריאת שרת SIDE EFFECT- שלוקחת זמן

            // async function getApiPosts() {
            //     const apiPosts = await getPosts()
            //     setProducts(apiPosts)
            // }
            // getApiPosts()
        }, [])

    function add(event) {
        console.log("hhh")
        addPost(addProduct).then(newPost => {
            setProducts([...products, newPost])
        })
        handleSubmit()
    }
    const navigate = useNavigate()

    function handleSubmit() {
        navigate('/products')
    }
    function cancel(){
        navigate('/home')
    }
    function handleChange(event) {
                const { name, value } = event.target
                // const newObj = { ...data, [name]: value }
                // newObj[name] = value
                // setData({ ...data, [event.target.name]: event.target.value })
                setAddProduct({ ...addProduct, [name]: value })
        
            }

    return<>
   
   <div className="botton-flowers">
    <form className="form">
          <h1>add product</h1>
    {/* controlled component */}
    <TextField value={addProduct.name} onChange={handleChange} name='name' label="product name" varient="contained"/><br />
    <TextField value={addProduct.description} onChange={handleChange} name='description'  label="description"/><br />
    <TextField value={addProduct.price} onChange={handleChange} name='price' type='number' label="price"/><br />
    <TextField value={addProduct.image} onChange={handleChange} name='image' label="image src" varient="contained"/><br />

    {/* uncontrolled component */}
    {/* <input ref={inputRef} placeholder='ref' />
    <select defaultValue={-1}>
        <option disabled value={-1}>בחר...</option>
        {options.map((option, index) => (
            <option key={index} value={index}>{option}</option>
        ))}
    </select>
    <textarea /> */}<p>
    <Button onClick={add}>שלח</Button>
    <Button onClick={cancel}>ביטול</Button>
    </p>
</form></div>
</>


}

// export default function Form() {

//     const inputRef = React.useRef()
//     const [data, setData] = React.useState({
//         name: '',
//         email: '',
//         password: '',
//         phone: '',
//     })

//     function handleSubmit(event) {
//         event.preventDefault()
//         console.log(inputRef.current.value);
//         inputRef.current.value = ''
//         //לבצע קריאת שרת ולשלוח את הנתונים
//         // fetch('localhost:8000' , { method: 'POST' , body: { }})
//     }

//     function handleChange(event) {
//         const { name, value } = event.target
//         // const newObj = { ...data, [name]: value }
//         // newObj[name] = value
//         // setData({ ...data, [event.target.name]: event.target.value })
//         setData({ ...data, [name]: value })

//     }

//     const options = ['a', 'b', 'c']
//     console.log('render');

   
// }