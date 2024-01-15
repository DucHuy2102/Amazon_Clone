import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { callAPI } from '../utils/CallAPI';
import { GB_CURRENCY } from '../utils/constants';
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
                <div className='min-w-[1000px] max-w-[1500px] m-auto p-4'>
                    <div className='grid grid-cols-10 gap-2'>
                        {/* left */}
                        <div className='col-span-3 p-8 rounded bg-white m-auto'>
                            <img src={`${product.image}`} />
                        </div>

                        {/* center */}
                        <div className='col-span-5 p-4 rounded bg-white divide-y divide-gray-400'>
                            <div className='mb-3'>
                                <ProductDetails product={product} ratings={true} />
                            </div>
                            <div className='mt-3 text-base xl:text-lg'>{product.description}</div>
                        </div>

                        {/* right */}
                        <div className='col-span-2 bg-white p-4 rounded'>
                            <div className='text-xl xl:text-2xl text-red-700 text-right font-semibold'>
                                {GB_CURRENCY.format(product.price)}
                            </div>
                            <div className='text-base xl:text-xl text-gray-500 text-right font-semibold'>
                                RRP: <span className='line-through'>{GB_CURRENCY.format(product.oldPrice)}</span>
                            </div>
                            <div className='text-sm xl:text-base text-blue-500 font-semibold mt-3'>FREE Returns</div>
                            <div className='text-sm xl:text-base text-blue-500 font-semibold mt-1'>FREE Delivery</div>
                            <div className='text-base xl:text-lg text-green-700 font-semibold mt-1'>In Stoke</div>
                            <div className='text-base xl:text-lg mt-1'>
                                Quantity:
                                <select className='ml-1 px-1 border bg-white rounded-md focus:border-indigo-600'>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                            <button className='bg-yellow-400 w-full p-3 rounded-md text-xs xl:text-sm hover:bg-yellow-500 mt-3'>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default ProductPage;
