
export default function CheckoutBreadcrumbs({ step }) {
    return (
        <div className='relative flex'>
            <div className='z-10 flex flex-row w-full justify-between'>
                {step === "address" ? <div className='bg-backgroundprimary p-1 font-bold leading-7 tracking-[-0.4px] text-[17px]'>Address</div> : <div className='bg-backgroundprimary p-1 leading-7 tracking-[-0.4px] text-[17px]'>Address</div> }
                {step === "shipping" ? <div className='bg-backgroundprimary p-1 font-bold leading-7 tracking-[-0.4px] text-[17px]'>Shipping</div> : <div className='bg-backgroundprimary p-1 leading-7 tracking-[-0.4px] text-[17px]'>Shipping</div>}
                {step === "payment" ? <div className='bg-backgroundprimary p-1 font-bold leading-7 tracking-[-0.4px] text-[17px]'>Payment</div> : <div className='bg-backgroundprimary p-1 leading-7 tracking-[-0.4px] text-[17px]'>Payment</div>}
                
            </div>
            <div className='border border-[#979797] w-full absolute z-0 top-[50%]'></div>
        </div>
    )
}
