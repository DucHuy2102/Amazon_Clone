const Navbar = () => {
    return (
        <header className='min-w-[1000px]'>
            <div className='flex bg-amazonclone-amazon_default text-white h-[60px]'>
                {/* left navbar */}
                <div className='flex items-center'>
                    <img className='h-[35px] w-[100px] m-2' src={'../images/amazon.png'} alt='Amazon banner' />
                    <div className='pr-4 pl-4'>
                        <div className='text-xs xl:text-sm'>Deliver to</div>
                        <div className='text-sm xl:text-base font-bold'>Vietnam</div>
                    </div>
                </div>

                {/* center navbar */}
                <div className='flex'></div>

                {/* right navbar */}
                <div className='flex'></div>
            </div>
        </header>
    );
};

export default Navbar;
