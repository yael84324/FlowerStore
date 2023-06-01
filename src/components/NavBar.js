import { NavLink } from 'react-router-dom'
import React, { useState, useEffect,useContext } from 'react';
import { ImageContext } from './ImageContext';
import './style.css'
import '../App.css'
import { Button} from '@material-ui/core';
export default function NavBar() {
    const { image, setImage} = useContext(ImageContext);
    let imageUrl = null;
    if(image)
      imageUrl = URL.createObjectURL(image);

    return <nav className='Nav-bar'>
        {imageUrl &&<img src={imageUrl} alt={image.name}  style={{ width: "100px" }} className='profile'/>}
        <Button><NavLink to='/home'>Home</NavLink></Button>
        <Button><NavLink to='/register'>Register</NavLink> </Button>
        <Button><NavLink to='/products'>All Products</NavLink></Button>
        <Button><NavLink to='/addProduct'>Add Products</NavLink></Button>
        <Button><NavLink to='/profile'>change image profile</NavLink></Button>
        <Button><NavLink to='/basket'>Basket</NavLink></Button>
        <Button><NavLink to='/pay'>pay</NavLink></Button>
    </nav>
}