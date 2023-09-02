import React from 'react'

export default function ToogleSpinner() {
    function handleClick(e) {
        const spinner = document.querySelector('.spinner')
        spinner.classList.toggle("translate-x-[100%]")
        spinner.classList.toggle("bg-[#fff]")
        spinner.classList.toggle("bg-[#A2FF86]")
        const backgroundSpinner = document.querySelector('.backgroundSpinner')
        backgroundSpinner.classList.toggle("bg-secondary")
        backgroundSpinner.classList.toggle("bg-primary")
    }
    return (
        <div className='relative cursor-pointer group inline-block 
        before:' onClick={handleClick}>
            <div className='backgroundSpinner h-6 w-10 rounded-full bg-secondary'></div>
            <div className='spinner h-5 mx-[1px] w-[18px] rounded-full bg-[#fff] absolute top-[2px] left-[1px] transition-transform'></div>
        </div>
    )
}
