import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaWindowClose } from 'react-icons/fa';

const ProductDetails = ({ products }) => {
    const [modal, setModal] = useState(true);
    const { productId } = useParams();
    const product = products.find((p) => p.id === productId);
    const navigate = useNavigate();

    useEffect(() => {
        if (!modal) navigate('/products');
    });

    return (
        <>
            <div
                className='fixed top-0 left-0 bottom-0 h-screen w-full bg-black-t-50 z-49 cursor-pointer'
                style={modal ? { visibility: 'visible' } : { display: 'none' }}
                onClick={() => setModal(false)}></div>

            <div
                className='fixed h-auto w-4/5 md:w-2/3 lg:h-3/4 lg:w-1/2 lg:left-1/4 top-24 bg-[#F5F5F5] rounded-md p-4 z-50'
                style={modal ? { visibility: 'visible' } : { display: 'none' }}>
                <div className='flex items-center justify-between'>
                    <span className='font-bold'>{product.name}</span>
                    <FaWindowClose
                        className='text-lg cursor-pointer hover:text-[#F05454] duration-300'
                        onClick={() => setModal(false)}
                    />
                </div>
                <div className='h-3/4'>
                    <img
                        src={product.image}
                        alt='product'
                        className='h-full w-full py-1'
                    />
                </div>
                <div className='flex flex-col'>
                    <span className='font-bold text-[#F05454]'>
                        ${product.price}
                    </span>
                    <span>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quisquam ab officiis corrupti consequatur autem
                        fugiat possimus dolore.
                    </span>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
