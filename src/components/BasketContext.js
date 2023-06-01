import React,{ useEffect, useState } from 'react'

export const BasketContext = React.createContext(null)


export default function BasketProvider(props) {


    const [basketProducts, setBasketProducts] = React.useState([]);
    const [sumBasket, setSumBasket] = useState(0);
    const [countBasket, setCountBasket] = useState(0);
    
   function addToBasket(obj)
   {
        const otherObj=basketProducts.filter((p,i)=> p.id!=obj._id)//פריטים כמו זה שמצטרף
        const sameObj=basketProducts.filter((p,i)=> p.id==obj._id)//פריטים לא כמו זה שמצטרף

        if(sameObj.length==0)
        {
            setBasketProducts([...basketProducts, 
                {"id":obj._id,"name":obj.name,"description":obj.description,"price":obj.price,"amount":1}])
        }
        else{
            setBasketProducts([...otherObj, 
       {"id":obj._id,"name":obj.name,"description":obj.description,"price":obj.price,"amount":sameObj[0].amount+1}])
        }
       
       setSumBasket(sumBasket+ obj.price)
       setCountBasket(countBasket+ 1)
         
   }





    return <BasketContext.Provider value={{basketProducts,addToBasket,sumBasket ,countBasket,setBasketProducts,setSumBasket,setCountBasket}} >
        {props.children}
    </BasketContext.Provider>




}
