import axios from "./axios";
import { createContext, useEffect, useState } from "react";


export const CustomContext = createContext();

export const Context = (props) =>{

     const [products, setProducts] = useState([]);
     const [basket, setBasket] = useState([]);
     const [burger, setBurger] = useState(false);


    useEffect(()=>{
        if(localStorage.getItem('user') !== null){
            setUser(JSON.parse(localStorage.getItem('user')))
        }
       }, [])
 
    const [user, setUser] = useState({
        email: ''
    });

   

      useEffect(()=>{
         axios('http://localhost:3004/products')
             .then(({data})=> setProducts(data))
             .catch((err)=> console.log(err.message))
      }, [])


      const addBasket = (product) =>{
            setBasket(prev => [...prev, {
                ...product,
                count: 1
            }])
      }

      const plusItem = (id) =>{
        setBasket(prev => prev.map(item => {
            if(item.id === id){
                return {...item, count: item.count + 1}
            }
            return item
        })
        )
      }

      const minusItem = (id) =>{

        let count = basket.find(item => item.id === id).count

        if(count === 1){
            setBasket(prev => prev.filter(item => item.id !== id))
        }else{
            setBasket(prev => prev.map(item => {
                if(item.id === id){
                    return {...item, count: item.count - 1}
                }
                return item
            }))
        }
 
      }

      const delBasket = (id) => {
        setBasket(prev => prev.filter(item => item.id !== id))
      }

  
    const value = {
        user,
        setUser,
        products,
        setProducts,
        basket,
        setBasket,
        addBasket,
        plusItem,
        minusItem,
        delBasket,
        burger,
        setBurger
        
    }


    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>

}