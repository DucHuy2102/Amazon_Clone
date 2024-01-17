import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { callAPI } from '../utils/CallAPI';

const SearchResult = () => {
    const [searchParams] = useSearchParams();
    const [products, setProducts] = useState(null);

    const getSearchResults = () => {
        const searchTerm = searchParams.get('searchTerm');
        const category = searchParams.get('category');
        callAPI(`data/search.json`).then((res) => {
            const categoryResult = res[category];
            if (searchTerm) {
                const rs = categoryResult.filter((product) =>
                    product.title.toLowerCase().includes(searchTerm.toLowerCase())
                );
                setProducts(rs);
            } else {
                setProducts(categoryResult);
            }
        });
    };

    useEffect(() => {
        getSearchResults();
    }, [searchParams]); 

    return (
        <div className='min-w-[1200px] max-w-[1300px] m-auto'>
            {products &&
                products.map((product, key) => {
                    return <div key={key}>{product.title}</div>;
                })}
        </div>
    );
};

export default SearchResult;
