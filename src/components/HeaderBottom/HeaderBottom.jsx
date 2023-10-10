import React from 'react'
import '../../App.css'
import HeaderBottomImg from '../../assets/HeaderBottom.png'
function HeaderBottom() {
    return (
        <div className='flex justify-between px-[120px] mt-[150px]'>
            <div className='w-[447px]'>
                <h2 className='text-[36px]'>ZEN Care</h2>
                <p className='text-[18px]'>Shopping online is usually a delightful experience. Until it's not.</p>
                <p className='text-[18px]'>Until something you buy, proves to be faulty, missing or a totally wrong item, you’re in for long product return procedures.</p>
                <p className='text-[18px]'>But, here comes ZEN Care: a free, built-in shopping protection. You can rest assured we’ll handle all of the transaction-related problems faster and with higher success rates. Where lone consumers can be ignored or dumped by dishonest merchants, ZEN doesn't get discouraged. ZEN persists.</p>
            </div>  
            <div>
                <img src={HeaderBottomImg} alt="" />
            </div>
        </div>
    )
}

export default HeaderBottom