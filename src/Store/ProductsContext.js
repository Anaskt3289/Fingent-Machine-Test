import { createContext, useState } from 'react';

export const productsContext = createContext(null)

export default function Products({ children }) {

    const [products, setProducts] = useState({})
    return (
        <productsContext.Provider value={{ products, setProducts }}>
            {children}
        </productsContext.Provider>
    )
}