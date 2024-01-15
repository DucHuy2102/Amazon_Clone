import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { callAPI } from '../utils/CallAPI';
import { useNavigate, createSearchParams } from 'react-router-dom';

const Search = () => {
    const [suggestions, setSuggestions] = useState(null);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('All');
    const navigate = useNavigate();

    const getSuggestions = () => {
        callAPI(`data/suggestions.json`).then((res) => {
            setSuggestions(res);
        });
    };

    useEffect(() => {
        getSuggestions();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate({
            pathname: 'search',
            search: `${createSearchParams({
                category: `${category}`,
                search: `${search}`,
            })}`,
        });
        setSearch('');
        setCategory('All');
    };

    return (
        <div className='w-[100%]'>
            <div className='flex items-center h-10 bg-amazonclone-amazon_yellow rounded'>
                <select
                    onChange={(e) => setCategory(e.target.value)}
                    className='px-1 h-[40px] rounded-l-md w-[60px] bg-gray-300 text-black border text-xs xl:text-sm'
                >
                    <option>All</option>
                    <option>Deals</option>
                    <option>Amazon</option>
                    <option>Fashion</option>
                    <option>Computers</option>
                    <option>Home</option>
                    <option>Mobiles</option>
                </select>
                <input
                    className='flex grow items-center h-[100%] rounded-l text-black'
                    type='text'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className='w-[45px]' onClick={handleSubmit}>
                    <MagnifyingGlassIcon className='h-[27px] m-auto text-[#333333]' />
                </button>
            </div>
            {suggestions && (
                <div className='bg-white text-black w-full z-40 absolute'>
                    {suggestions
                        .filter((suggestion) => {
                            const currentSearch = search.toLowerCase();
                            const title = suggestion.title.toLowerCase();
                            return currentSearch && title.startsWith(currentSearch) && title !== currentSearch;
                        })
                        .slice(0, 10)
                        .map((suggestion) => (
                            <div key={suggestion.id} onClick={() => setSearch(suggestion.title)}>
                                {suggestion.title}
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
};

export default Search;
