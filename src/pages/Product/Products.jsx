import React, { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import { useAxios } from '../../hooks/HttpRequest';

const Products = ({ setProducts }) => {
    const url = 'https://62dac0c3e56f6d82a7690f32.mockapi.io/api/v1/products';
    let content = (
        <h3 className='font-bold flex w-full justify-center'>
            <Loader />
        </h3>
    );
    const dataProduct = useAxios(url);

    useEffect(() => {
        if (dataProduct) setProducts(dataProduct);
    });

    if (dataProduct) {
        content = (
            <>
                {dataProduct.map((p) => {
                    return (
                        <Link
                            to={`/products/${p.id}`}
                            key={p.id}
                            className='group w-3/4 sm:w-[300px] h-[200px] mx-4 mb-5 bg-[#30475E] text-[#F5F5F5] shadow-md shadow-[#040c16] flex items-center justify-center hover:scale-105 duration-300 cursor-pointer'>
                            <p className='group-hover:text-teal-500 duration-300'>
                                {p.name}
                            </p>
                        </Link>
                    );
                })}
            </>
        );
    }

    return (
        <div className='max-w-[1000px] h-full mx-auto flex flex-wrap justify-center lg:justify-start items-center py-5'>
            {content}
            <Outlet />
        </div>
    );
};

export default Products;
