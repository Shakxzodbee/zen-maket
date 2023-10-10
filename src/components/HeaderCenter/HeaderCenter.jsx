import React from 'react'
import '../../App.css'
import HeaderCenterImg from '../../assets/HeaderCenter.png'

function HeaderCenter() {
    return (
        <div className='flex justify-between mt-[95px] px-[120px] '>
            <div>
                <img src={HeaderCenterImg} alt="" />
            </div>
            <div className='mt-[250px] w-[445px]'>
                <h3 className='text-[#222] text-[36px]'>1-year warranty boost</h3>
                <p className='text-[18px] text-[#222] mt-[22px]'>ZEN cards have a very neat feature that will help you whenever your electronic devices start failing after the standard warranty ends, which is pretty common.</p>
                <p className='text-[18px] text-[#222] mt-[22px]'>When you buy any electronics with your ZEN shopping Mastercard®, their warranty gets extended by one year. How does it work? It simply does. Automatically.</p>
            </div>
        </div>
    )
}

export default HeaderCenter