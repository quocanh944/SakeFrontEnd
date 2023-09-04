import React from 'react';
import Navbar from '../header/Navbar';
import UserSpace from '../header/UserSpace';

const header = ({handleSeachValue}) => {
    return (
        <div className='border'>
            <div className="flex h-[45px] w-full bg-[#000] [&>*:not(:last-child)]:uppercase justify-around items-center">
                <div className="justify-between text-[#fff]">USD</div>
                <div className="justify-between text-[#fff]">FREE SHIPPING ON ALL HERMAN MILLER! FEB. 25–28.</div>
                <div className="justify-between text-[#fff]">Support</div>
            </div>
            <div className='flex justify-between items-center px-[10%]'>
                <Navbar handleSeachValue={handleSeachValue}></Navbar>
                <UserSpace></UserSpace>
            </div>
        </div>
    );
};

export default header;