import {Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import useBasketContext from './useBasketContext';

function Pay() {
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const {sumBasket} = useBasketContext()

  const handleSubmit = async (event) => {
    event.preventDefault();
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
    if(result.data){
      console.log("Succeeded")
    }
    console.log(result);
  }

  return (
    <form onSubmit={handleSubmit} className='form'><br/>
        <h2>amount to pay:{" "+sumBasket}</h2>
        <br />
        <TextField type="text" value={creditCardNumber} label="Credit Card Number" onChange={(event) => setCreditCardNumber(event.target.value)} />
        <br />
        <TextField type="text" value={expirationDate} label="Expiration Date" onChange={(event) => setExpirationDate(event.target.value)} />
        <br />
        <TextField type="text" value={cvv} label="CVV" onChange={(event) => setCvv(event.target.value)} />
        <br />
        <Button type="submit">Pay</Button>
    </form>
  );
}

export default Pay;
