import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css';
import toast from 'react-hot-toast';

const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (tshirt) =>{
        const exist = cart.find(ts => ts._id === tshirt._id);
        if(exist){
          toast('dont have permission ')
        }
        else{
            const newCart = [...cart, tshirt];
            setCart(newCart)
        }
        
    }

    const removeHandler =(id) =>{
        const remaining = cart.filter(tshirt => tshirt._id !== id);
        setCart(remaining)
    }
    return (
        <div className='home-container'>
            <div className='tShirts-container'>
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div>
                <Cart 
                cart={cart}
                removeHandler={removeHandler}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;