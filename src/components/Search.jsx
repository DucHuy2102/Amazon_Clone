import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Search = () => {
    return (
        <div className='w-[100%]'>
            <div className='flex items-center h-10 bg-amazonclone-amazon_yellow rounded'>
                <select className='px-1 h-[40px] rounded-l-md w-[60px] bg-gray-300 text-black border text-xs xl:text-sm'>
                    <option>All</option>
                    <option>Deals</option>
                    <option>Amazon</option>
                    <option>Fashion</option>
                    <option>Computers</option>
                    <option>Home</option>
                    <option>Mobiles</option>
                </select>
                <input className='flex grow items-center h-[100%] rounded-l text-black' type='text' />
                <button className='w-[45px]'>
                    <MagnifyingGlassIcon className='h-[27px] m-auto text-[#333333]' />
                </button>
            </div>
        </div>
    );
};

export default Search;
