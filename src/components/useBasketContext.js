import React from 'react'
import { BasketContext } from './BasketContext'

export default function useBasketContext() {
    
    const context = React.useContext(BasketContext)

    return context
}