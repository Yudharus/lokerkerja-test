import React, { useEffect, useState } from 'react'
import CardDisplayCart from '../molecules/CardDisplayCart.molecules'
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, clearCart } from '../../configs/actions.config';

const CardCart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const [total, setTotal] = useState(0)
    const calculateTotal = () => {
        const totalAmount = cart.reduce((acc, item) => {
            const itemPrice = typeof item.Price === 'number' ? item.Price : 0;
            const itemQuantity = typeof item.quantity === 'number' ? item.quantity : 0;
            return acc + itemPrice * itemQuantity;
        }, 0);

        return totalAmount;
    };

    useEffect(() => {
        setTotal(calculateTotal());
    }, [cart]);

    return (
        <div className='bg-white w-2/5 h-full pt-2 px-4 shadow '>
            <p className='font-bold text-2xl text-black mb-5'>Order Details</p>
            <div className='h-4/5 overflow-y-auto'>
                {
                    cart.map(v => (
                        <CardDisplayCart
                            product={v.name}
                            img={v.foto}
                            qty={v.quantity}
                            price={v.Price}
                            onClickKurang={() => dispatch(decreaseQuantity(v.id))}
                            onClickTambah={() => dispatch(increaseQuantity(v.id))}
                        />

                    ))
                }

            </div>
            <div className='sticky top-[85vh]'>
                <div className='flex items-center'>
                    <p className='font-bold text-md text-gray-2 mr-8  ' onClick={() => dispatch(calculateTotal())}>Total : </p>
                    <p className='font-bold text-md text-blue--primary'>Rp {total} </p>
                </div>
                <div className='bg-blue--primary w-full h-10 mt-2 rounded-md flex items-center justify-center cursor-pointer' onClick={() => dispatch(clearCart())}>
                    <p className='font-bold text-base text-white mr-8 cursor-pointer '>Pay Now</p>
                </div>
            </div>
        </div>
    )
}

export default CardCart