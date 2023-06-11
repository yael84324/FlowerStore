import { React } from "react"
import { useNavigate } from 'react-router-dom'
import crocusImage from '../images/crocus-2139771.jpg';
import bouquet from '../images/bouquet-purpel.jpg';
import { Button } from "@material-ui/core";
import '../App.css'

export default function Home() {
    const navigate = useNavigate()

    function handleSubmit() {
        navigate('/products')
    }

    return <>
        <img src={crocusImage} alt="Crocus flower" className="home-img"/>
        <div className="nearby">
            <Button onClick={handleSubmit}>see more 😉</Button>
            <img src={bouquet} alt="purpel bouquet" className="little-img"/>
            <div className="aboutUs">Why send our flowers?
                <br/>Because with us it's much more than a flower delivery
                <br/>Our story begins with your happy moments,
                <br/>It is precisely in these moments that we want to be there for you.
                <br/>Our inspiration comes from your need to give and make happy those you love.
                <br/>Our range of diverse collections brings together boutique products
                <br/>Starting with flower bouquets woven with great precision, pots and plants
                <br/>High quality ornaments, wines from transported wineries, quality chocolate,
                <br/>Pampering birth packages and spa packages.
                <br/>All you have to do is just choose.
                <br/><br/>
            </div>
        </div>
    </>  
}