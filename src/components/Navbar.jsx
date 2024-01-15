/* eslint-disable react/prop-types */
import { Search } from './';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <header className='min-w-[1000px]'>
            <div className='flex bg-amazonclone-amazon_default text-white h-[60px]'>
                {/* left navbar */}
                <div className='flex items-center m-4'>
                    <Link to='/'>
                        <img className='h-[35px] w-[100px] m-2' src={'../images/amazon.png'} alt='Amazon banner' />
                    </Link>
                    <div className='pr-4 pl-4'>
                        <div className='text-xs xl:text-sm'>Deliver to</div>
                        <div className='text-sm xl:text-base font-bold'>Vietnam</div>
                    </div>
                </div>

                {/* center navbar */}
                <div className='flex grow relative items-center'>
                    <Search />
                </div>

                {/* right navbar */}
                <div className='flex items-center m-4'>
                    <div className='pr-4 pl-4'>
                        <div className='text-xs xl:text-sm'>Hello, sign in</div>
                        <div className='text-sm xl:text-base font-bold'>Account & Lists</div>
                    </div>
                    <div className='pr-4 pl-4'>
                        <div className='text-xs xl:text-sm'>Returns</div>
                        <div className='text-sm xl:text-base font-bold'>& Orders</div>
                    </div>
                    <Link to='/checkout'>
                        <div className='flex pr-3 pl-3'>
                            <ShoppingCartIcon className='h-[48px]' />
                            <div className='font-bold mt-6 text-xs xl:text-sm'>Cart</div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='flex bg-amazonclone-amazon_light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6'>
                <div>Today&apos;s Deals</div>
                <div>Registry</div>
                <div>Customer Service</div>
                <div>Gift Cards</div>
                <div>Sell</div>
            </div>
        </header>
    );
};

export default Navbar;
