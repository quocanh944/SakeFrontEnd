import React from 'react';
import Navbar from '../header/Navbar';
import UserSpace from '../header/UserSpace';

const header = () => {
    return (
        <div className='border'>
            <div class="flex h-[45px] w-full bg-[#000] [&>*:not(:last-child)]:uppercase justify-around items-center">
                <div class="justify-between text-[#fff]">USD</div>
                <div class="justify-between text-[#fff]">FREE SHIPPING ON ALL HERMAN MILLER! FEB. 25–28.</div>
                <div class="justify-between text-[#fff]">Support</div>
            </div>
            <div className='flex justify-between items-center px-[10%]'>
                <Navbar></Navbar>
                <UserSpace></UserSpace>
            </div>
        </div>
    );
};

export default header;