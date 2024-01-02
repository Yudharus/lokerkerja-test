import React from 'react'

const CardDisplayCart = ({ img, product, price, qty, onClickTambah, onClickKurang }) => {
    return (
        <div className='w-full h-32 flex'>
            <div className='w-2/5 h-28 bg-gray rounded-md'>
                <img src={img} className='w-full h-full rounded-md' />
            </div>
            <div className='ml-4 w-2/5'>
                <p className='font-bold text-lg text-black--primary'>{product}</p>
                <div className='w-full flex justify-between mt-4'>
                    <p className='font-semibold text-gray-2 text-sm'>{qty}X</p>
                    <p className='font-semibold text-blue--primary text-sm'>Rp {price}</p>
                </div>
                <div className='flex items-center mt-4'>
                    <div className='items-center justify-center flex h-6 w-6 bg-blue--primary rounded-md cursor-pointer mr-8' onClick={onClickTambah}>
                        <p className='font-semibold text-white -mt-1'>+</p>
                    </div>
                    <div className='items-center justify-center flex h-6 w-6 bg-blue--primary rounded-md  cursor-pointer' onClick={onClickKurang}>
                        <p className='font-semibold text-white -mt-1'>-</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CardDisplayCart