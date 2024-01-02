import React from 'react'

const CardDisplay = ({ name, price, img, onClick, onClickAddCart }) => {
    return (
        <div className='bg-white w-52 rounded-md p-2 shadow' >
            <div className='w-full h-40 bg-gray rounded-md' onClick={onClick}>
                <img src={img} className='w-full h-full rounded-md' />
            </div>
            <div className='mt-2'>
                <p className='font-bold text-base text-black--primary'>{name}</p>
                <p className='font-semibold text-xs text-black--primary'>Rp {price}</p>
            </div>
            <div className='bg-blue--primary w-full h-8 mt-2 rounded-md flex items-center justify-center cursor-pointer' onClick={onClickAddCart}>
                <p className='font-bold text-base text-white cursor-pointer '>Add to Cart</p>
            </div>
        </div>
    )
}

export default CardDisplay