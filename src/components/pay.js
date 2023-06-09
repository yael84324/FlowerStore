import {Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import useBasketContext from './useBasketContext';
import order from "../images/ordersendding.gif"
function Pay() {
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {setSumBasket,setBasketProducts,setCountBasket,sumBasket} = useBasketContext()

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const data = {
      amount: sumBasket,
      creditCardNumber: creditCardNumber,
      expirationDate: expirationDate,
      cvv: cvv,
      companyId: '250575900',
      apiKey: 'AgShuxJsI2WnfxAoMpdJhvtrPEFdkJPmhFmgbGAcCy4XyYLWCt',
      apiPublicKey: 'o2QFiaRlT1zIu0cx47rn6s9qGdYYuwWHhmHxAbdRy3ExXZEpcT',
    };

    const response = await fetch('https://app.sumit.co.il/billing/paymentmethods/setforcustomer/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    resetForm();
    setIsLoading(false);
    if(result.data){
      console.log("Succeeded")
    }
    console.log(result);
  }

  const resetForm = () => {
    setCreditCardNumber('');
    setExpirationDate('');
    setCvv('');
    setSumBasket(0);
    setBasketProducts([]);
    setCountBasket(0);
  };

  return (
    <form onSubmit={handleSubmit} className='form'><br/>
        <h2>amount to pay:{" "+sumBasket}</h2>
        <br />
        {isLoading ? (<>
              <img src={order} alt="loading..." className='loadinggif'/>
              <h2 className='downh2'>Your order is been delivered</h2>
          </>
        ) : (
          <>
            <TextField type="text" value={creditCardNumber} label="Credit Card Number" onChange={(event) => setCreditCardNumber(event.target.value)} />
            <br />
            <TextField type="text" value={expirationDate} label="Expiration Date" onChange={(event) => setExpirationDate(event.target.value)} />
            <br />
            <TextField type="text" value={cvv} label="CVV" onChange={(event) => setCvv(event.target.value)} />
            <br />
            <Button type="submit">Pay</Button>
          </>
        )}
    </form>
  );
}

export default Pay;
