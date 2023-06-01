
import React, { useState } from 'react';

function Payment() {
  const [amount, setAmount] = useState(0);
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      amount: amount,
      creditCardNumber: creditCardNumber,
      expirationDate: expirationDate,
      cvv: cvv,
      companyId: '255555550',
      apiKey: 'XXXXXXXXXXXX2lg6',
      apiPublicKey: 'o2222cT',
    };

    const response = await fetch('https://app.sumit.co.il/billing/paymentmethods/setforcustomer/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    console.log(result);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Amount:
        <input type="number" value={amount} onChange={(event) => setAmount(event.target.value)} />
      </label>
      <br />
      <label>
        Credit Card Number:
        <input type="text" value={creditCardNumber} onChange={(event) => setCreditCardNumber(event.target.value)} />
      </label>
      <br />
      <label>
        Expiration Date:
        <input type="text" value={expirationDate} onChange={(event) => setExpirationDate(event.target.value)} />
      </label>
      <br />
      <label>
        CVV:
        <input type="text" value={cvv} onChange={(event) => setCvv(event.target.value)} />
      </label>
      <br />
      <button type="submit">Pay</button>
    </form>
  );
}

export default Payment;
