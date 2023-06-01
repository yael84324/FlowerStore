 import  useBasketContext  from './useBasketContext'
 import { useNavigate } from 'react-router-dom'
import {Button} from '@material-ui/core'
export default function Basket() {
const navigate = useNavigate()
const {basketProducts,sumBasket,setSumBasket,setBasketProducts,setCountBasket,countBasket } = useBasketContext()

function removeFromBasket(id,price)
{
    const x=basketProducts.filter((p)=> p.id!=id)
    const obj=basketProducts.filter((p)=> p.id==id)
    setBasketProducts(x)
    setSumBasket(sumBasket-obj[0].price*obj[0].amount)
    setCountBasket(countBasket-obj[0].amount)
}
function removeOne(id,price)
{   
    const x=basketProducts.filter((p)=> p.id==id)
    if(x[0].amount==1)
    {

        removeFromBasket(id,price)
    }
    else{
        basketProducts.map((p)=> p.id==id ?p.amount=p.amount-1:p.amount)
        setSumBasket(sumBasket-price)
        setCountBasket(countBasket-1)
    }
}


if(basketProducts.length){//כדי שלא יפול אם הסל ריק
return <p  className='form'><div className='basket-bg'><h1>basket</h1>
{basketProducts.map((p,i)=>
<div key={i} className='p-on-basket'>
    <p> שם המוצר : {p.name}</p>
    <p> {p.description} </p>
    <p> מחיר ליחידה : {p.price}</p>
    <p>כמות שהוזמנה : {p.amount}</p>
    <Button  onClick={()=>removeFromBasket(p.id,p.price)}>remove it</Button>
    <Button  onClick={()=>removeOne(p.id,p.price)}>remove one</Button>
</div>)}
<br/>
מחיר סופי:{" "}        
 { sumBasket} 
<br/>
סה"כ מוצרים:  {" "}    
 { countBasket} 
<Button onClick={()=>{        navigate('/Chatbot')   }}>pay</Button>
</div></p>
}
else return <p>null basket</p>
}