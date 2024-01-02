import React from 'react'

const ModalDetail = ({ onClickClose, data }) => {
    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5  rounded-t">
                            <h3 className="text-3xl font-semibold">
                                Detail Products
                            </h3>
                        </div>
                        <div className="relative p-6 flex-auto">
                            <div className='w-full h-40 bg-gray rounded-md'>
                                <img src={data.foto} className='w-full h-full rounded-md' />
                            </div>
                            <div className='mt-2'>
                                <p className='font-bold text-base text-black--primary'>{data.name}</p>
                                <p className='font-semibold text-xs text-black--primary'>Rp {data.Price}</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-end p-6 ">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={onClickClose}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default ModalDetail