import React from 'react'
import { BasketContext } from './BasketContext'

export default function useBasketContext() {

    const constext = React.useContext(BasketContext)

    return constext
}