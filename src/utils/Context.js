import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const CustomContext = createContext();

export const Context = (props) =>{

    const [products, setProducts] = useState([]);
 
    const [user, setUser] = useState({
        email: ''
    });

    useEffect(()=>{
        axios('http://localhost:3004/products')
        .then(({data})=> setProducts(data))
        .catch((err)=> console.log(err.message))
    }, [])

  
    const value = {
        user,
        setUser,
        products,
        setProducts
        
 
    }


    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>

}