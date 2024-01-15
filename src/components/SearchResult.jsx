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

    return <div></div>;
};

export default SearchResult;
