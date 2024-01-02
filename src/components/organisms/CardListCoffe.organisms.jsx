import React, { useEffect, useState } from 'react'
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, setDoc } from "firebase/firestore";
import CardDisplay from '../molecules/CardDisplay.molecules';
import { useDispatch, useSelector } from 'react-redux';
import ModalDetail from '../molecules/ModalDetail.molecules';
import { MoonLoader } from "react-spinners";


const CardListCoffe = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const [valueSearch, setValueSearch] = useState('');
    const [searchResult, setSearchResult] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const firebaseConfig = {
        apiKey: "AIzaSyBaleC9mFQlr3-pbnt_Ttn-sQ9C0awkfJw",
        authDomain: "lokerid-test.firebaseapp.com",
        projectId: "lokerid-test",
        storageBucket: "lokerid-test.appspot.com",
        messagingSenderId: "1082558056184",
        appId: "1:1082558056184:web:a85aba7c818f03997edd0d"
    };

    const app = initializeApp(firebaseConfig);

    const db = getFirestore(app);

    useEffect(() => {
        const fetchPost = async () => {
            setIsLoading(true)
            try {
                const querySnapshot = await getDocs(collection(db, 'product'));
                const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                dispatch({ type: 'SET_PRODUCTS', payload: productsData });
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setIsLoading(false)
            }
        }
        fetchPost();
    }, [dispatch])

    useEffect(() => {
        setSearchResult(filterProducts());
    }, [valueSearch, products]);


    const handleSearch = (e) => {
        setValueSearch(e.target.value);
    };


    const filterProducts = () => {
        if (!valueSearch) {
            setSearchResult(products);
            return products;
        }

        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(valueSearch.toLowerCase())
        );
        setSearchResult(filteredProducts);


        return filteredProducts;
    };

    const handleCardClick = (productId) => {
        setShowModal(!showModal)
        const product = products.find(p => p.id === productId);
        setSelectedProduct(product);
    };

    return (
        <div className=' h-full w-full p-6 '>
            {
                showModal ? <ModalDetail data={selectedProduct} onClickClose={() => setShowModal(!showModal)} /> : null
            }
            <div className='flex items-center'>
                <div className='w-1/2 h-10 bg-white rounded-md shadow px-2 py-1 mr-2'>
                    <input className='outline-none w-full h-full' value={valueSearch} onChange={handleSearch} placeholder='ex: red velvet' />
                </div>
            </div>
            {
                isLoading ?
                    (
                        <div className='flex items-center justify-center mt-12'>
                            <MoonLoader size={40} color={'#2F80ED'} loading={true} />

                        </div>
                    ) : (
                        <div className='mt-8 grid grid-rows-2 grid-flow-col gap-4'>
                            {
                                searchResult.length == 0 ? (
                                    <>
                                        {
                                            products.map(v => {
                                                return (
                                                    <CardDisplay
                                                        onClickAddCart={() => dispatch({ type: 'ADD_TO_CART', payload: v })}
                                                        onClick={() => handleCardClick(v.id)}
                                                        name={v.name}
                                                        price={v.Price}
                                                        img={v.foto}
                                                    />
                                                )
                                            })
                                        }
                                    </>
                                ) : (
                                    <>
                                        {
                                            searchResult.map(v => {
                                                return (
                                                    <CardDisplay
                                                        onClickAddCart={() => dispatch({ type: 'ADD_TO_CART', payload: v })}
                                                        onClick={() => handleCardClick(v.id)}

                                                        name={v.name}
                                                        price={v.Price}
                                                        img={v.foto}
                                                    />
                                                )
                                            })
                                        }
                                    </>
                                )
                            }

                        </div>
                    )
            }

        </div>
    )
}


export default CardListCoffe