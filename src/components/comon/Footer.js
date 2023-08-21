import React from 'react'
import Feedback from '../footer/Feedback'
import DirectFooter from '../footer/DirectFooter'

export default function Footer(props) {
    // catogories api
    let listdirect = ["Women's", "Men's", "Kid's", "Shoes", "Equipment", "By Activity", "Gift Cards", "Sale"]
    return (
        <div className='h-[420px] w-full py-[45px] flex items-center justify-evenly gap-6'>
            <Feedback></Feedback>
            <DirectFooter title="Shop" listDirects={listdirect}></DirectFooter>
            <DirectFooter title="Shop" listDirects={listdirect}></DirectFooter>
            <DirectFooter title="Shop" listDirects={listdirect}></DirectFooter>
        </div>
    )
}
