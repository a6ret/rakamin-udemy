import { useState, useEffect } from 'react';
import axios from 'axios';

export const useAxios = (url) => {
    const [product, setProduct] = useState(null);
    useEffect(() => {
        axios.get(url).then((res) => {
            setProduct(res.data);
        });
    }, [url]);

    return product;
};
