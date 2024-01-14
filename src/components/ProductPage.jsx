import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { callAPI } from '../utils/CallAPI';
import { ProductDetails } from './';

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const getProduct = () => {
        callAPI(`data/products.json`).then((res) => setProduct(res[id]));
    };

    useEffect(() => {
        getProduct();
    }, []);

    if (!product?.title) return <h1>Loading product ...</h1>;

    return (
        product && (
            <div className='h-screen bg-amazonclone-amazon_background'>
                <div className='min-w-[1000px] max-w-[1500px] m-auto bg-orange-400'>
                    <div className='grid grid-cols-10 gap-2'>
                        {/* left */}
                        <div className='col-span-3 p-8 rounded bg-white m-auto'>
                            <img src={`${product.image}`} />
                        </div>

                        {/* center */}
                        <div className='col-span-5'></div>

                        {/* right */}
                        <div className='col-span-2'></div>
                    </div>
                </div>
            </div>
        )
    );
};

export default ProductPage;
